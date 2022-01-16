import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

import Button from "../button/Button";
import { Svg18 } from "./Decorations";
import HeroBackground from "./HeroBackground";

export default function Hero() {
	return (
		<section
			className="overflow-hidden relative w-full h-screen bg-blue"
			id="hero-container"
		>
			<HeroBackground />

			<div className="flex relative z-20 flex-col justify-center pt-8 h-full">
				<div
					className="container grid px-3 lg:px-0 mx-auto font-Montserrat leading-none w-fit"
					id="hero-text"
				>
					<Svg18
						className={clsx(
							"col-span-2 self-center mr-4 w-40 h-40",
							"sm:col-span-1 sm:row-span-2 sm:justify-self-end",
							"sm:w-40 md:w-52 lg:w-60 xl:w-72 sm:h-40 md:h-52 lg:h-60 xl:h-72",
						)}
					/>
					<motion.h1
						className={clsx(
							"relative col-span-2 self-center text-hero-simonyi font-extrabold text-yellow uppercase",
							"sm:col-span-1 sm:self-end",
							"sm:text-hero-simonyi-sm md:text-hero-simonyi-md lg:text-hero-simonyi-lg xl:text-hero-simonyi-xl",
						)}
						style={{ willChange: "left, opacity" }}
						animate={{ opacity: 1, left: 0 }}
						transition={{ delay: 1, duration: 2 }}
						initial={{ opacity: 0, left: 300 }}
						id="hero-simonyi"
					>
						Simonyi
					</motion.h1>
					<motion.h1
						className={clsx(
							"relative col-span-2 self-center text-hero-konf font-light uppercase",
							"sm:col-span-1 sm:self-start",
							"sm:text-hero-konf-sm md:text-hero-konf-md lg:text-hero-konf-lg xl:text-hero-konf-xl",
						)}
						style={{ willChange: "left, opacity" }}
						animate={{ opacity: 1, left: 0 }}
						transition={{ delay: 1.25, duration: 2 }}
						initial={{ opacity: 0, left: 300 }}
						id="hero-konf"
					>
						Konferencia
					</motion.h1>
					<div className="grid col-span-2 mt-8" id="hero-date">
						<div className="self-center mx-3">
							<motion.hr
								style={{ willChange: "width" }}
								className="rounded-full border-t-3"
								animate={{ width: "100%" }}
								transition={{ delay: 2.5, duration: 1.5 }}
								initial={{ width: "0%" }}
							/>
						</div>
						<motion.h2
							className={clsx(
								"relative mx-1 text-3xl font-semibold text-center",
								"sm:mx-4 sm:text-3xl md:text-4xl lg:text-5xl",
							)}
							style={{ willChange: "top, opacity" }}
							animate={{ opacity: 1, top: 0 }}
							transition={{ delay: 3, duration: 0.75 }}
							initial={{ opacity: 0, top: 30 }}
						>
							2021.04.14.
						</motion.h2>
						<div className="relative self-center mx-3">
							<motion.hr
								style={{ willChange: "width" }}
								className="absolute right-0 rounded-full transform rotate-180 border-t-3"
								animate={{ width: "100%" }}
								transition={{ delay: 2.5, duration: 1.5 }}
								initial={{ width: "0%" }}
							/>
						</div>
					</div>
					<Link
						href="https://hopin.com/events/xviii-simonyi-konferencia"
						passHref
					>
						<Button target="_blank" className="mt-20" isDelayed>
							Regisztráció
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
