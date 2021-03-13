import type { Entry, Sys } from "contentful";
import hydrate from "next-mdx-remote/hydrate";
import type { MdxRemote } from "next-mdx-remote/types";
import React from "react";

import type { IPresentationFields } from "@/@types/generated/contentful";

import H5 from "./H5";
import PresentationCard from "./PresentationCard";

type PresentationsProps = {
	presentations: Array<{
		sys: Sys;
		fields: IPresentationFields;
		// eslint-disable-next-line @typescript-eslint/ban-types
		toPlainObject: () => object;
		update: () => Promise<Entry<IPresentationFields>>;
		mdxSource: MdxRemote.Source;
	}>;
};

export default function Presentations({ presentations }: PresentationsProps) {
	return (
		<section
			className="container grid gap-8 grid-cols-1 justify-items-center mx-auto p-3 lg:grid-cols-2"
			id="eloadok"
		>
			{presentations.map((entry) => {
				const presentationContent = hydrate(entry.mdxSource, {
					components: { h5: H5 },
				});
				return (
					<PresentationCard
						key={entry.sys.id}
						{...entry.fields}
						imageURL={entry.fields.image.fields.file.url}
					>
						{presentationContent}
					</PresentationCard>
				);
			})}
		</section>
	);
}
