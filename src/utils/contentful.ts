import type { Entry } from "contentful";
import { createClient } from "contentful";
import renderToString from "next-mdx-remote/render-to-string";
import type { MdxRemote } from "next-mdx-remote/types";

import type {
	IBreak,
	IBreakFields,
	IOrganiserFields,
	IPresentation,
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

function orderEntriesByOrder(
	a: Entry<IPresentationFields>,
	b: Entry<IPresentationFields>,
): number {
	if (a.fields.order > b.fields.order) return 1;
	if (a.fields.order < b.fields.order) return -1;
	return 0;
}

function orderEntriesByDate(
	a: Entry<IPresentationFields> | Entry<IBreakFields>,
	b: Entry<IPresentationFields> | Entry<IBreakFields>,
): number {
	if (!a.fields.startDate || !b.fields.startDate) return 0;

	return (
		Date.parse(a.fields.startDate) - Date.parse(b.fields.startDate) ||
		a.fields.side.localeCompare(b.fields.side)
	);
}

export async function getCmsData() {
	const presentations = await client.getEntries<IPresentationFields>({
		content_type: "presentation",
	});

	presentations.items.sort(orderEntriesByOrder);

	presentations.items.sort(orderEntriesByDate);

	const renderedPresentations: (IPresentation & {
		mdxSource: MdxRemote.Source;
	})[] = await Promise.all(
		presentations.items.map(async (item) => {
			const mdxSource = await renderToString(item.fields.description);
			// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
			const r = {
				mdxSource,
				...item,
			} as IPresentation & { mdxSource: MdxRemote.Source };
			return r;
		}),
	);

	const breaks = await client.getEntries<IBreakFields>({
		content_type: "break",
	});

	breaks.items.sort(orderEntriesByDate);

	const renderedBreaks: (IBreak & { mdxSource: MdxRemote.Source })[] =
		await Promise.all(
			breaks.items.map(async (item) => {
				const mdxSource = await renderToString(item.fields.text);
				// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
				const r = {
					mdxSource,
					...item,
				} as IBreak & { mdxSource: MdxRemote.Source };
				return r;
			}),
		);

	const combined = [...renderedPresentations, ...renderedBreaks];

	combined.sort(orderEntriesByDate);

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
		presentations: combined,
		organisers: flattenedOrganisers,
		sponsors: flattenedSponsors,
	};
}
