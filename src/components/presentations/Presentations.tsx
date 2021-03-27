import clsx from "clsx";
import type { Entry, Sys } from "contentful";
import hydrate from "next-mdx-remote/hydrate";
import type { MdxRemote } from "next-mdx-remote/types";
import React from "react";

import type { IPresentationFields } from "@/@types/generated/contentful";

import Br from "../customDefaults/Br";
import H5 from "../customDefaults/H5";
import PresentationCard from "./PresentationCard";
import styles from "./Presentations.module.scss";

type PresentationsProps = {
	leftPresentations: Array<
		IPresentationFields & { mdxSource: MdxRemote.Source }
	>;
	rightPresentations: Array<
		IPresentationFields & { mdxSource: MdxRemote.Source }
	>;
};

export default function Presentations({
	leftPresentations,
	rightPresentations,
}: PresentationsProps) {
	return (
		<section className={clsx(styles.section, "scroll-margin")} id="eloadasok">
			<h2 className="mb-4 text-center text-4xl font-semibold">Előadások</h2>
			<div
				className={clsx(
					styles.container,
					"relative grid gap-8 grid-cols-2 justify-items-center mb-16 mt-4 mx-auto md:gap-16 lg:grid-cols-2",
				)}
			>
				<div className={styles.timeline} />
				<div>
					{leftPresentations.map((entry, i) => {
						const presentationContent = hydrate(entry.mdxSource, {
							components: { h5: H5, br: Br },
						});
						const imageUrl = entry.image
							? `https:${entry.image.fields.file.url}`
							: "/assets/images/blank.png";

						return (
							<PresentationCard
								key={entry.name}
								{...entry}
								isLeft
								imageURL={imageUrl}
							>
								{presentationContent}
							</PresentationCard>
						);
					})}
				</div>
				<div>
					{rightPresentations.map((entry, i) => {
						const presentationContent = hydrate(entry.mdxSource, {
							components: { h5: H5, br: Br },
						});
						const imageUrl = entry.image
							? `https:${entry.image.fields.file.url}`
							: "/assets/images/blank.png";

						return (
							<PresentationCard key={entry.name} {...entry} imageURL={imageUrl}>
								{presentationContent}
							</PresentationCard>
						);
					})}
				</div>
			</div>
		</section>
	);
}
