import clsx from "clsx";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import tinydate from "tinydate";

import type { IBreakFields } from "@/@types/generated/contentful";

import styles from "./PresentationCard.module.scss";

type BreakCardProps = {
	isLeft: boolean;
} & IBreakFields &
	React.HTMLProps<HTMLDivElement>;

const BreakCard = forwardRef<HTMLDivElement, BreakCardProps>(
	(
		/* eslint-disable react/prop-types */
		{ startDate, endDate, isLeft, children, className },
		/* eslint-enable react/prop-types */
		ref,
	) => {
		const startDateObj = new Date(startDate ?? "");
		const endDateObj = new Date(endDate ?? "");
		const stamp = tinydate("{HH}:{mm}");

		return (
			<motion.figure
				className={clsx(styles.card, "w-full", className)}
				ref={ref}
			>
				<span
					className={clsx(
						"absolute top-0 hidden p-1 text-center text-blue text-lg font-semibold bg-yellow rounded-md sm:inline-block",
						!isLeft && "sm:hidden",
					)}
					style={{
						right: isLeft ? "calc((-128px / 2) - (128px / 2 / 2))" : "",
					}}
				>
					{stamp(startDateObj)}
				</span>
				<div className={styles.container}>
					<div
						className={clsx(
							styles.content,
							"font-semibold",
							isLeft ? "text-teal" : "text-green",
						)}
					>
						{children}
					</div>
					<h5 className="col-span-2 -mt-3 mb-4 text-center text-yellow font-bold">
						{stamp(startDateObj)}-{stamp(endDateObj)}
					</h5>
				</div>
			</motion.figure>
		);
	},
);

export default BreakCard;
