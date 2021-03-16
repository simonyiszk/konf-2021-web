import type { Entry } from "contentful";

import type { IOrganiserFields } from "@/@types/generated/contentful";
import Organiser from "@/components/contacts/Organiser";

type ContactsProps = {
	organisers: Array<Entry<IOrganiserFields>>;
};

export default function Contacts({ organisers }: ContactsProps) {
	return (
		<section className="flex flex-col items-center" id="kapcsolat">
			<h2 className="mb-10 text-4xl font-semibold">Kapcsolat</h2>
			<div className="flex flex-wrap items-center justify-evenly w-full">
				{organisers.map((organiser) => (
					<Organiser key={organiser.sys.id} {...organiser.fields} />
				))}
			</div>
		</section>
	);
}
