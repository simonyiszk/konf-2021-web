import Image from "next/image";
import type React from "react";

import type { ISponsorLogoFields } from "@/@types/generated/contentful";

import styles from "./SponsorLogo.module.scss";

type SponsorLogoProps = { size: number } & ISponsorLogoFields;

function ConditionalWrapper({
	condition,
	wrapper,
	children,
}: {
	condition: boolean;
	wrapper: (arg0: JSX.Element) => JSX.Element;
	children: JSX.Element;
}) {
	return condition ? wrapper(children) : children;
}

export default function SponsorLogo({
	image,
	name,
	link,
	size,
}: SponsorLogoProps) {
	return (
		<ConditionalWrapper
			condition={!!link}
			wrapper={(children) => (
				<a
					href={link}
					className={styles.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{children}
				</a>
			)}
		>
			<div className={styles.container} style={{ maxWidth: `${size}px` }}>
				<Image
					className={styles.image}
					src={`https:${image.fields.file.url}`}
					width={image.fields.file.details.image?.width ?? 400}
					height={image.fields.file.details.image?.height ?? 250}
					alt={name}
				/>
			</div>
		</ConditionalWrapper>
	);
}
