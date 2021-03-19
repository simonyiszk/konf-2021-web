import type { Entry } from "contentful";
import renderToString from "next-mdx-remote/render-to-string";

import type {
	IOrganiserFields,
	IPresentationFields,
	ISponsorLogoFields,
} from "@/@types/generated/contentful";

import { client } from "./contentful";

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

	const renderedPresentations = await Promise.all(
		presentations.items.map(async (item) => {
			const mdxSource = await renderToString(item.fields.description);
			return {
				mdxSource,
				...item,
			};
		}),
	);

	const organisers = await client.getEntries<IOrganiserFields>({
		content_type: "organiser",
	});

	organisers.items.sort((a, b) => a.fields.order - b.fields.order);

	const sponsors = await client.getEntries<ISponsorLogoFields>({
		content_type: "sponsorLogo",
	});

	sponsors.items.sort((a, b) => (a.fields.name > b.fields.name ? 1 : -1));

	return {
		presentations: renderedPresentations,
		organisers: organisers.items,
		sponsors: sponsors.items,
	};
}
