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
	const startDateObj = new Date(startDate ?? "");
	const endDateObj = new Date(endDate ?? "");
	const stamp = tinydate("{HH}:{mm}");

	const showDate = false;

	return (
		<figure className={styles.card}>
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

				<figcaption className={styles.caption}>
					<h3>{title}</h3>
					<h4>
						{name} - {profession ?? "ErrNo: Profession"}
					</h4>
					{showDate && startDate && endDate && (
						<h5>
							{stamp(startDateObj)}-{stamp(endDateObj)}
						</h5>
					)}
				</figcaption>

				<div className={styles.content}>{children}</div>
			</div>
		</figure>
	);
}
