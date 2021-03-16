import type { Entry, Sys } from "contentful";
import hydrate from "next-mdx-remote/hydrate";
import type { MdxRemote } from "next-mdx-remote/types";
import React from "react";

import type { IPresentationFields } from "@/@types/generated/contentful";

import Br from "../customDefaults/Br";
import H5 from "../customDefaults/H5";
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
			className="container grid gap-8 grid-cols-1 justify-items-center mb-8 mx-auto p-3 lg:grid-cols-2"
			id="eloadok"
		>
			{presentations.map((entry) => {
				const presentationContent = hydrate(entry.mdxSource, {
					components: { h5: H5, br: Br },
				});
				let imageUrl = "/assets/images/blank.png";
				if (entry.fields.image) {
					imageUrl = `https:${entry.fields.image.fields.file.url}`;
				}
				return (
					<PresentationCard
						key={entry.sys.id}
						{...entry.fields}
						imageURL={imageUrl}
					>
						{presentationContent}
					</PresentationCard>
				);
			})}
		</section>
	);
}
