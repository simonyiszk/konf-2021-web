import { createClient, Entry } from "contentful";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { ParsedUrlQuery } from "querystring";

import type {
	IPresentation,
	IPresentationFields,
} from "@/@types/generated/contentful";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export const getStaticProps: GetStaticProps<{
	entries: Array<Entry<IPresentationFields>>;
}> = async () => {
	const client = createClient({
		space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
		accessToken:
			process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? "ErrorNoAccessToken",
	});

	function orderEntriesByDate(a: IPresentation, b: IPresentation): number {
		if (Date.parse(a.fields.date) > Date.parse(b.fields.date)) return -1;
		if (Date.parse(a.fields.date) < Date.parse(b.fields.date)) return 1;
		return 0;
	}

	const allEntries = await client.getEntries<IPresentationFields>({
		content_type: "presentation",
	});

	return { props: { entries: allEntries.items } };
};

export default function HomePage({
	entries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout>
			<Hero />
			<section>
				{entries.map((entry) => {
					return (
						<div key={entry.sys.id}>
							<h3>{entry.fields.title}</h3>
							<h4>
								{entry.fields.name} - {entry.fields.profession}
							</h4>
							<h4>{entry.fields.title}</h4>
							<p>{entry.fields.description}</p>
							{JSON.stringify(entry.fields)}
						</div>
					);
				})}
			</section>
		</Layout>
	);
}
