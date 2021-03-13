import type { Entry } from "contentful";
import type { InferGetStaticPropsType } from "next";
import renderToString from "next-mdx-remote/render-to-string";

import type {
	IOrganiserFields,
	IPresentationFields,
} from "@/@types/generated/contentful";
import Contacts from "@/components/contacts/Contacts";
import Hero from "@/components/decorations/Hero";
import Layout from "@/components/Layout";
import Presentations from "@/components/presentations/Presentations";
import { client } from "@/utils/contentful";

export const getStaticProps = async () => {
	function orderEntriesByDate(
		a: Entry<IPresentationFields>,
		b: Entry<IPresentationFields>,
	): number {
		if (Date.parse(a.fields.startDate) > Date.parse(b.fields.startDate))
			return -1;
		if (Date.parse(a.fields.startDate) < Date.parse(b.fields.startDate))
			return 1;
		return 0;
	}

	const presentations = await client.getEntries<IPresentationFields>({
		content_type: "presentation",
	});

	presentations.items.sort(orderEntriesByDate);

	const organisers = await client.getEntries<IOrganiserFields>({
		content_type: "organiser",
	});

	organisers.items.sort((a, b) => a.fields.order - b.fields.order);

	const renderedPresentations = await Promise.all(
		presentations.items.map(async (item) => {
			const mdxSource = await renderToString(item.fields.description);
			return {
				mdxSource,
				...item,
			};
		}),
	);

	return {
		props: {
			presentations: renderedPresentations,
			organisers: organisers.items,
		},
	};
};

export default function HomePage({
	presentations,
	organisers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout>
			<Hero />
			<Presentations presentations={presentations} />
			<Contacts organisers={organisers} />
		</Layout>
	);
}
