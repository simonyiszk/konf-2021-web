import type { InferGetStaticPropsType } from "next";

import Contacts from "@/components/contacts/Contacts";
import Hero from "@/components/decorations/Hero";
import Layout from "@/components/Layout";
import Presentations from "@/components/presentations/Presentations";
import { getCmsData } from "@/utils/cms";

export const getStaticProps = async () => {
	const { presentations, organisers } = await getCmsData();

	return {
		props: {
			presentations,
			organisers,
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
