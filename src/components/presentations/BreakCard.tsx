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
		{ startDate, endDate, isDouble, isLeft, children, className },
		/* eslint-enable react/prop-types */
		ref,
	) => {
		const startDateObj = new Date(startDate ?? "");
		const endDateObj = new Date(endDate ?? "");
		const stamp = tinydate("{HH}:{mm}");

		return (
			<>
				{isDouble === false && (
					<motion.figure
						className={clsx(styles.card, "w-full", className)}
						ref={ref}
					>
						<span
							className={clsx(
								"hidden sm:inline-block absolute top-0 p-1 text-lg font-semibold text-center text-blue bg-yellow rounded-md",
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
							<h5 className="col-span-2 -mt-3 mb-4 font-bold text-center text-yellow">
								{stamp(startDateObj)}-{stamp(endDateObj)}
							</h5>
						</div>
					</motion.figure>
				)}
				{isDouble === true && (
					<motion.figure
						className={clsx(
							"grid z-10 grid-cols-2 col-span-2 content-center w-full font-Roboto",
						)}
						ref={ref}
					>
						<div className="flex flex-col sm:col-span-2 items-center">
							<div className="p-1 mb-4 w-16 text-lg font-semibold text-center text-blue bg-yellow rounded-md">
								{stamp(startDateObj)}
							</div>
							<div
								className={clsx(
									styles.content,
									styles.underlinedH3,
									"font-semibold text-center",
								)}
							>
								{children}
							</div>
						</div>
						<div className="flex sm:hidden flex-col items-center">
							<div className="p-1 mb-4 w-16 text-lg font-semibold text-center text-blue bg-yellow rounded-md">
								{stamp(startDateObj)}
							</div>
							<div
								className={clsx(
									styles.content,
									styles.underlinedH3,
									"font-semibold text-center",
								)}
							>
								{children}
							</div>
						</div>
					</motion.figure>
				)}
			</>
		);
	},
);

export default BreakCard;
