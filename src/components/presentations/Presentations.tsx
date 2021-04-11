import clsx from "clsx";
import hydrate from "next-mdx-remote/hydrate";
import type { MdxRemote } from "next-mdx-remote/types";
import React, { createRef, useEffect, useState } from "react";

import type { IBreak, IPresentation } from "@/@types/generated/contentful";
import { useCurrentWidth } from "@/utils/hooks";

import Br from "../customDefaults/Br";
import H3 from "../customDefaults/H3";
import H5 from "../customDefaults/H5";
import BreakCard from "./BreakCard";
import PresentationCard from "./PresentationCard";
import styles from "./Presentations.module.scss";

type PresentationsProps = {
	presentations: Array<
		| (IPresentation & { mdxSource: MdxRemote.Source })
		| (IBreak & { mdxSource: MdxRemote.Source })
	>;
};

export default function Presentations({ presentations }: PresentationsProps) {
	const [heights, setHeights] = useState<number[]>([]);

	const [side, setSide] = useState(false);

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

	function scrollLeft(change: number, duration: number, s: boolean) {
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
			} else {
				setSide(s);
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
			<div className="mb-10 text-center text-2xl">
				<p>Az előadások idén online lesznek közvetítve.</p>
				<p>A platformot a Regisztráció gombra kattintva lehet elérni.</p>
			</div>
			<div className="sticky z-20 top-24 flex flex-row justify-evenly rounded-b-md xl:static">
				<button
					className={clsx(
						styles.button1,
						"p-3 hover:text-teal text-2xl font-bold hover:bg-blue rounded-md focus:outline-none",
						side === false
							? "text-teal bg-blue ring-4 ring-teal"
							: "text-blue bg-teal",
					)}
					type="button"
					onClick={() => {
						scrollLeft(-2000, 250, false);
					}}
				>
					IB025
				</button>
				<button
					className={clsx(
						styles.button2,
						"p-3 hover:text-green text-2xl font-bold hover:bg-blue rounded-md focus:outline-none",
						side === true
							? "text-green bg-blue ring-4 ring-green"
							: "text-blue bg-green",
					)}
					type="button"
					onClick={() => {
						scrollLeft(2000, 250, true);
					}}
				>
					IB026
				</button>
			</div>
			<div className="overflow-x-auto" id="scroll" ref={containerRef}>
				<div
					className={clsx(
						styles.container,
						"relative grid gap-8 gap-x-8 grid-cols-2 justify-items-center mb-16 mt-4 mx-auto sm:gap-16 sm:gap-x-32",
					)}
				>
					<div className={clsx(styles.timelineBG, "bg-blur-10")} />
					<div className={styles.timeline} />
					<div className={styles.time} />

					{presentations.map((entry, i) => {
						const content = hydrate(entry.mdxSource, {
							components: { h5: H5, h3: H3, br: Br },
						});
						if (entry.sys.contentType.sys.id === "presentation") {
							const local = entry as IPresentation;
							const imageUrl = local.fields.image
								? `https:${local.fields.image.fields.file.url}`
								: "/assets/images/blank.png";

							return (
								<PresentationCard
									key={local.fields.name}
									{...local.fields}
									isLeft={i % 2 === 0}
									imageURL={imageUrl}
									className={clsx(i % 2 === 0 ? "ml-auto" : "mr-auto")}
									ref={refs[i]}
								>
									{content}
								</PresentationCard>
							);
						}
						if (entry.sys.contentType.sys.id === "break") {
							const local = entry as IBreak;
							return (
								<BreakCard
									key={`${local.fields.startDate}+${local.fields.side}`}
									{...local.fields}
									isLeft={i % 2 === 0}
									className={clsx(i % 2 === 0 ? "ml-auto" : "mr-auto")}
									ref={refs[i]}
								>
									{content}
								</BreakCard>
							);
						}
						return null;
					})}
				</div>
			</div>
		</section>
	);
}
