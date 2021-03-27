import type { InferGetStaticPropsType } from "next";

import Contacts from "@/components/contacts/Contacts";
import Hero from "@/components/decorations/Hero";
import Layout from "@/components/Layout";
import Presentations from "@/components/presentations/Presentations";
import SponsorSection from "@/components/sponsors/SponsorSection";
import { getCmsData } from "@/utils/contentful";

export const getStaticProps = async () => {
	const { presentations, organisers, sponsors } = await getCmsData();

	return {
		props: {
			presentations,
			organisers,
			sponsors,
		},
	};
};

export default function HomePage({
	presentations,
	organisers,
	sponsors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const leftPresentations = presentations.filter(
		(entry) => entry.side === "left",
	);
	const rightPresentations = presentations.filter(
		(entry) => entry.side === "right",
	);
	return (
		<Layout>
			<Hero />
			<Presentations
				leftPresentations={leftPresentations}
				rightPresentations={rightPresentations}
			/>
			<Contacts organisers={organisers} />
			<SponsorSection sponsors={sponsors} />
		</Layout>
	);
}
