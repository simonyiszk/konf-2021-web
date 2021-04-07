import clsx from "clsx";
import hydrate from "next-mdx-remote/hydrate";
import type { MdxRemote } from "next-mdx-remote/types";
import React, { createRef, useEffect, useState } from "react";

import type { IPresentationFields } from "@/@types/generated/contentful";
import { useCurrentWidth } from "@/utils/hooks";

import Br from "../customDefaults/Br";
import H5 from "../customDefaults/H5";
import PresentationCard from "./PresentationCard";
import styles from "./Presentations.module.scss";

type PresentationsProps = {
	presentations: Array<IPresentationFields & { mdxSource: MdxRemote.Source }>;
};

export default function Presentations({ presentations }: PresentationsProps) {
	const [heights, setHeights] = useState<number[]>([]);

	const wWidth = useCurrentWidth();

	const refs = presentations.map(() => createRef<HTMLDivElement>());
	const containerRef = createRef<HTMLDivElement>();

	function easeInOutQuad(t: number, b: number, c: number, d: number) {
		// eslint-disable-next-line no-param-reassign
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		// eslint-disable-next-line no-param-reassign, no-plusplus
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	}

	function scrollLeft(change: number, duration: number) {
		if (!containerRef || !containerRef.current) return;
		const start = containerRef.current.scrollLeft;
		let currentTime = 0;
		const increment = 8;

		const animateScroll = () => {
			if (!containerRef || !containerRef.current) return;
			currentTime += increment;
			const val = easeInOutQuad(currentTime, start, change, duration);
			containerRef.current.scrollLeft = val;
			if (currentTime < duration) {
				setTimeout(animateScroll, increment);
			}
		};
		animateScroll();
	}

	useEffect(() => {
		refs.forEach((ref) => {
			if (ref.current) {
				const clientHeight = ref?.current?.offsetHeight;
				if (clientHeight) setHeights([...heights, clientHeight]);
			}
		});
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [wWidth]);

	return (
		<section className={clsx(styles.section, "scroll-margin")} id="eloadasok">
			<h2 className="mb-8 text-center text-4xl font-semibold">Előadások</h2>
			<div className="sticky z-20 top-24 flex flex-row justify-evenly rounded-b-md xl:static">
				<button
					className={styles.button1}
					type="button"
					onClick={() => scrollLeft(-2000, 250)}
				>
					IB025
				</button>
				<button
					className={styles.button2}
					type="button"
					onClick={() => scrollLeft(2000, 250)}
				>
					IB026
				</button>
			</div>
			<div className="overflow-x-auto" id="scroll" ref={containerRef}>
				<div
					className={clsx(
						styles.container,
						"relative grid gap-8 gap-x-8 grid-cols-2 justify-items-center mb-16 mt-4 mx-auto md:gap-16 md:gap-x-32",
					)}
				>
					<div className={clsx(styles.timelineBG, "bg-blur-10")} />
					<div className={styles.timeline} />
					<div className={styles.time} />

					{presentations.map((entry, i) => {
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
								id={i % 2 === 0 ? `${Math.floor((i + 2) / 2)}-row` : undefined}
								isLeft={i % 2 === 0}
								imageURL={imageUrl}
								className={clsx(i % 2 === 0 ? "ml-auto" : "mr-auto")}
								ref={refs[i]}
							>
								{presentationContent}
							</PresentationCard>
						);
					})}
				</div>
			</div>
		</section>
	);
}
