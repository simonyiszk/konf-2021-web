import type { Entry } from "contentful";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import type {
	IOrganiserFields,
	IPresentationFields,
} from "@/@types/generated/contentful";
import Contacts from "@/components/Contacts";
import Hero from "@/components/decorations/Hero";
import Layout from "@/components/Layout";
import PresentationCard from "@/components/presentations/PresentationCard";
import { client } from "@/utils/contentful";

export const getStaticProps: GetStaticProps<{
	organisers: Array<Entry<IOrganiserFields>>;
	presentations: Array<Entry<IPresentationFields>>;
}> = async () => {
	function orderEntriesByDate(
		a: Entry<IPresentationFields>,
		b: Entry<IPresentationFields>,
	): number {
		if (Date.parse(a.fields.date) > Date.parse(b.fields.date)) return -1;
		if (Date.parse(a.fields.date) < Date.parse(b.fields.date)) return 1;
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

	return {
		props: { presentations: presentations.items, organisers: organisers.items },
	};
};

export default function HomePage({
	presentations,
	organisers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout>
			<Hero />
			{/* <section className="container grid gap-8 grid-cols-1 justify-items-center mx-auto p-3 lg:grid-cols-2">
				{presentations.map((entry) => {
					return (
						<PresentationCard
							key={entry.sys.id}
							{...entry.fields}
							imageURL={entry.fields.image.fields.file.url}
						/>
					);
				})}
			</section> */}
			{/* <Contacts organisers={organisers} /> */}
		</Layout>
	);
}

export const thisIsAnUnusedExport =
	"this export only exists to disable fast refresh for this file";
