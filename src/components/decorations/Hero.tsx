import clsx from "clsx";
import { motion } from "framer-motion";

import { Svg18 } from "./Decorations";
import styles from "./Hero.module.scss";
import HeroBackground from "./HeroBackground";

export default function Hero() {
	return (
		<section
			className="relative w-full h-screen overflow-hidden"
			id="hero-container"
		>
			<HeroBackground />

			<div className="relative z-20 flex flex-col justify-center pt-8 h-full">
				<div
					className="w-fit container grid mx-auto px-3 font-Montserrat leading-none lg:px-0"
					id="hero-text"
				>
					<Svg18
						className={clsx(
							"col-span-2 self-center mr-4 w-40 h-40",
							"sm:col-span-1 sm:row-span-2 sm:justify-self-end",
							"sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72",
						)}
					/>
					<motion.h1
						className={clsx(
							"relative col-span-2 self-center text-yellow text-hero-simonyi font-extrabold uppercase",
							"self-end sm:col-span-1",
							"sm:text-hero-simonyi-sm md:text-hero-simonyi-md lg:text-hero-simonyi-lg xl:text-hero-simonyi-xl",
						)}
						style={{ willChange: "left, opacity" }}
						animate={{ opacity: 1, left: 0 }}
						transition={{ delay: 2.5, duration: 2 }}
						initial={{ opacity: 0, left: 300 }}
						id="hero-simonyi"
					>
						Simonyi
					</motion.h1>
					<motion.h1
						className={clsx(
							"relative col-span-2 self-center text-hero-konf font-light uppercase",
							"self-start sm:col-span-1",
							"sm:text-hero-konf-sm md:text-hero-konf-md lg:text-hero-konf-lg xl:text-hero-konf-xl",
						)}
						style={{ willChange: "left, opacity" }}
						animate={{ opacity: 1, left: 0 }}
						transition={{ delay: 3, duration: 1.5 }}
						initial={{ opacity: 0, left: 300 }}
						id="hero-konf"
					>
						Konferencia
					</motion.h1>
					<div className="grid col-span-2 mt-8" id="hero-date">
						<div className="self-center mx-3">
							<motion.hr
								style={{ willChange: "width" }}
								className="border-t-3 rounded-full"
								animate={{ width: "100%" }}
								transition={{ delay: 4, duration: 2 }}
								initial={{ width: "0%" }}
							/>
						</div>
						<motion.h2
							className={clsx(
								"relative mx-1 text-center text-3xl font-semibold",
								"sm:mx-4 sm:text-3xl md:text-4xl lg:text-5xl",
							)}
							style={{ willChange: "top, opacity" }}
							animate={{ opacity: 1, top: 0 }}
							transition={{ delay: 5, duration: 1 }}
							initial={{ opacity: 0, top: 30 }}
						>
							2021.04.14.
						</motion.h2>
						<div className="relative self-center mx-3">
							<motion.hr
								style={{ willChange: "width" }}
								className="border-t-3 absolute right-0 rounded-full transform rotate-180"
								animate={{ width: "100%" }}
								transition={{ delay: 4, duration: 2 }}
								initial={{ width: "0%" }}
							/>
						</div>
					</div>
					<a
						href="https://schdesign.hu"
						target="_blank"
						rel="noopener"
						className={styles.button}
					>
						Regisztráció
					</a>
				</div>
			</div>
		</section>
	);
}
