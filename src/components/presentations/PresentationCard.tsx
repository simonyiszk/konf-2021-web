import clsx from "clsx";
import Image from "next/image";
import { forwardRef } from "react";
import tinydate from "tinydate";

import type { IPresentationFields } from "@/@types/generated/contentful";

import styles from "./PresentationCard.module.scss";

type PresentationCardProps = {
	imageURL: string;
	isLeft: boolean;
} & IPresentationFields &
	React.HTMLProps<HTMLDivElement>;

const PresentationCard = forwardRef<HTMLDivElement, PresentationCardProps>(
	(
		/* eslint-disable react/prop-types */
		{
			title,
			name,
			startDate,
			endDate,
			profession,
			imageURL,
			isLeft,
			children,
			className,
		},
		/* eslint-enable react/prop-types */
		ref,
	) => {
		const startDateObj = new Date(startDate ?? "");
		const endDateObj = new Date(endDate ?? "");
		const stamp = tinydate("{HH}:{mm}");

		return (
			<figure className={clsx(styles.card, className)} ref={ref}>
				<div className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							className={styles.image}
							src={imageURL}
							alt={name}
							width={208}
							height={208}
						/>
					</div>

					<figcaption className="col-span-2 sm:col-span-1">
						<h3
							className={clsx(
								"mb-3 text-xl font-bold",
								isLeft === true ? "text-teal" : "text-green",
							)}
						>
							{title}
						</h3>
						<h4 className="mb-1 text-sm uppercase">
							<span className="text-red">{name}</span> -{" "}
							{profession ?? "ErrNo: Profession"}
						</h4>
						{startDate && endDate && (
							<h5 className="text-yellow font-bold">
								{stamp(startDateObj)}-{stamp(endDateObj)}
							</h5>
						)}
					</figcaption>

					<div className={styles.content}>{children}</div>
				</div>
			</figure>
		);
	},
);

export default PresentationCard;
