import type { Entry } from "contentful";
import { createClient } from "contentful";
import renderToString from "next-mdx-remote/render-to-string";
import type { MdxRemote } from "next-mdx-remote/types";

import type {
	IOrganiserFields,
	IPresentationFields,
	ISponsorLogoFields,
} from "@/@types/generated/contentful";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
	accessToken:
		(process.env.VERCEL_ENV === "production"
			? process.env.CONTENTFUL_ACCESS_TOKEN
			: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) ?? "ErrorNoAccessToken",
	host:
		process.env.VERCEL_ENV === "production"
			? "cdn.contentful.com"
			: "preview.contentful.com",
});

function orderEntriesByDate(
	a: Entry<IPresentationFields>,
	b: Entry<IPresentationFields>,
): number {
	if (a.fields.order > b.fields.order) return 1;
	if (a.fields.order < b.fields.order) return -1;
	return 0;
}

export async function getCmsData() {
	const presentations = await client.getEntries<IPresentationFields>({
		content_type: "presentation",
	});

	presentations.items.sort(orderEntriesByDate);

	const renderedPresentations: Array<
		IPresentationFields & { mdxSource: MdxRemote.Source }
	> = await Promise.all(
		presentations.items.map(async (item) => {
			const mdxSource = await renderToString(item.fields.description);
			return {
				mdxSource,
				...item.fields,
			};
		}),
	);

	const organisers = await client.getEntries<IOrganiserFields>({
		content_type: "organiser",
	});
	organisers.items.sort((a, b) => a.fields.order - b.fields.order);
	const flattenedOrganisers = organisers.items.map((item) => item.fields);

	const sponsors = await client.getEntries<ISponsorLogoFields>({
		content_type: "sponsorLogo",
	});
	sponsors.items.sort((a, b) => (a.fields.name > b.fields.name ? 1 : -1));
	const flattenedSponsors = sponsors.items.map((item) => item.fields);

	return {
		presentations: renderedPresentations,
		organisers: flattenedOrganisers,
		sponsors: flattenedSponsors,
	};
}
