import type { IOrganiserFields } from "@/@types/generated/contentful";
import Organiser from "@/components/contacts/Organiser";

type ContactsProps = {
	organisers: IOrganiserFields[];
};

export default function Contacts({ organisers }: ContactsProps) {
	return (
		<section
			className="flex flex-col items-center scroll-margin"
			id="kapcsolat"
		>
			<h2 className="mb-10 text-4xl font-semibold">Kapcsolat</h2>
			<div className="flex flex-wrap justify-evenly items-center w-full">
				{organisers.map((organiser) => (
					<Organiser key={organiser.name} {...organiser} />
				))}
			</div>
		</section>
	);
}
