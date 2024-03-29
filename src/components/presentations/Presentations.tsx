import clsx from "clsx";
import hydrate from "next-mdx-remote/hydrate";
import type { MdxRemote } from "next-mdx-remote/types";
import React, { createRef, useEffect, useState } from "react";
import YouTube from "react-youtube";

import type { IBreak, IPresentation } from "@/@types/generated/contentful";
import { useCurrentWidth } from "@/utils/hooks";

import Br from "../customDefaults/Br";
import H3 from "../customDefaults/H3";
import H5 from "../customDefaults/H5";
import BreakCard from "./BreakCard";
import PresentationCard from "./PresentationCard";
import styles from "./Presentations.module.scss";

type PresentationsProps = {
	presentations: (
		| (IPresentation & { mdxSource: MdxRemote.Source })
		| (IBreak & { mdxSource: MdxRemote.Source })
	)[];
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
			<h2 className="mb-8 text-4xl font-semibold text-center">Előadások</h2>
			<div className="mb-10 text-2xl text-center">
				<p>Az előadások idén online lesznek közvetítve.</p>
				<p>A platformot a Regisztráció gombra kattintva lehet elérni.</p>
			</div>
			<div className="flex sticky xl:static top-24 z-20 flex-row justify-evenly rounded-b-md">
				<button
					className={clsx(
						styles.button,
						styles.button1,
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
						styles.button,
						styles.button2,
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
						"grid relative grid-cols-2 gap-8 sm:gap-16 gap-x-8 sm:gap-x-32 justify-items-center mx-auto mt-8 mb-8",
					)}
				>
					<div className={styles.timeline} />
					<div className={styles.time} />

					<div className={clsx(styles.video, "ml-auto")}>
						<YouTube
							videoId="decGVnT9Rj4"
							containerClassName="aspect-w-16 aspect-h-9"
						/>
					</div>
					<div className={clsx(styles.video, "mr-auto")}>
						<YouTube
							videoId="2I2uirLBb68"
							containerClassName="aspect-w-16 aspect-h-9"
						/>
					</div>

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
									isLeft={local.fields.side === "left"}
									imageURL={imageUrl}
									className={clsx(
										local.fields.side === "left" ? "ml-auto" : "mr-auto",
									)}
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
									isLeft={local.fields.side === "left"}
									className={clsx(
										local.fields.side === "left" ? "ml-auto" : "mr-auto",
									)}
									ref={refs[i]}
								>
									{content}
								</BreakCard>
							);
						}
						return null;
					})}
					<div className="grid grid-cols-2 col-span-2 justify-items-center w-full">
						<div className="z-10 sm:col-span-2 p-1 -mb-4 w-16 text-lg font-semibold text-center text-blue bg-yellow rounded-md">
							18:00
						</div>
						<div className="sm:hidden z-10 p-1 -mb-4 w-16 text-lg font-semibold text-center text-blue bg-yellow rounded-md">
							18:00
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
