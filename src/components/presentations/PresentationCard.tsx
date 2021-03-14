import Image from "next/image";
import tinydate from "tinydate";

import type { IPresentationFields } from "@/@types/generated/contentful";

import styles from "./PresentationCard.module.scss";

type PresentationCardProps = {
	imageURL: string;
} & IPresentationFields &
	React.HTMLProps<HTMLDivElement>;

export default function PresentationCard({
	title,
	name,
	startDate,
	endDate,
	profession,
	imageURL,
	children,
}: PresentationCardProps) {
	const startDateObj = new Date(startDate);
	const endDateObj = new Date(endDate);
	const stamp = tinydate("{HH}:{mm}");

	return (
		<figure className={styles.card}>
			<div className={styles.container}>
				<Image
					className={styles.image}
					src={`https:${imageURL}`}
					alt={name}
					width={208}
					height={208}
				/>

				<figcaption className={styles.caption}>
					<h3>{title}</h3>
					<h4>
						{name} - {profession ?? "Error: No Profession Provided"}
					</h4>
					<h5>
						{stamp(startDateObj)}-{stamp(endDateObj)}
					</h5>
				</figcaption>

				<div className={styles.content}>{children}</div>
			</div>
		</figure>
	);
}
