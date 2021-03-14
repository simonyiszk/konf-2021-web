import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

import { DottedCircle, FatLine, SmallCircle } from "./Decorations";

export default function HeroBackground() {
	const rand = () => {
		return Math.random() * 4;
	};
	return (
		<div
			className="absolute w-screen h-screen overflow-hidden"
			id="hero-background"
		>
			{/* Grids */}

			<div className="absolute left-1/2 top-0 sm:block" id="tm">
				<img className="" src="/assets/images/topmid.svg" alt="" />
			</div>

			<div className="absolute right-0 top-0 hidden sm:block" id="tr">
				<img className="" src="/assets/images/topright.svg" alt="" />
			</div>

			<div className="absolute bottom-0 left-0 sm:block" id="bl">
				<img className="" src="/assets/images/botleft.svg" alt="" />
			</div>

			<div className="absolute bottom-0 right-0 hidden sm:block" id="br">
				<img className="" src="/assets/images/botright.svg" alt="" />
			</div>

			{/* Top Left */}

			<DottedCircle
				width="500"
				height="500"
				className="absolute -left-32 -top-48 hidden sm:block"
			/>

			<div className="absolute left-6 top-8 grid gap-3 grid-cols-5 sm:top-28 xl:left-28">
				<SmallCircle />
				<SmallCircle />
				<SmallCircle className="invisible sm:visible" />
				<SmallCircle className="invisible" />
				<SmallCircle className="invisible" />
				<SmallCircle className="invisible" />
				<SmallCircle />
				<SmallCircle />
				<SmallCircle className="invisible sm:visible" />
				<SmallCircle className="invisible" />
				<SmallCircle className="invisible" />
				<SmallCircle className="invisible" />
				<SmallCircle className="invisible 2xl:visible" />
				<SmallCircle className="invisible 2xl:visible" />
				<SmallCircle className="invisible 2xl:visible" />
			</div>

			{/* Top Right */}

			<DottedCircle
				width="500"
				height="500"
				className="absolute -right-12 -top-80"
			/>
			<DottedCircle
				width="400"
				height="400"
				className="absolute -right-64 top-32"
			/>

			<div className="absolute -top-8 left-2/3">
				<svg
					height="112"
					width="112"
					fill="#4BAF87"
					className="absolute -top-8 right-8 hidden sm:block"
				>
					<circle cx="50%" cy="50%" r="55" />
				</svg>
				<svg
					height="300"
					width="300"
					fill="#C14048"
					className="absolute -left-24 -top-32 hidden sm:block"
				>
					<circle cx="50%" cy="50%" r="145" />
				</svg>
				<div
					style={{
						width: "200px",
						height: "200px",
					}}
					className="absolute -top-16 left-20 hidden sm:block"
				>
					<img src="/assets/images/circle.svg" alt="" />
				</div>
				<svg
					height="200"
					width="200"
					fill="#E6A537"
					className="absolute -top-16 left-20 hidden sm:block"
				>
					<circle cx="50%" cy="50%" r="85" />
				</svg>
			</div>

			<div className="absolute -right-60 2xl:-right-8 2xl:top-28 top-4 xl:-right-48">
				<FatLine color="red" className="absolute right-0 top-20" />
				<FatLine color="yellow" className="absolute -right-4 top-0" />
				<FatLine color="teal" className="absolute -right-20 top-0" />
			</div>

			{/* Bottom Left */}

			<div className="absolute -left-40 bottom-56 2xl:bottom-96 2xl:left-0 sm:-left-4 sm:bottom-1/2">
				<FatLine color="yellow" className="absolute -left-20 top-64" />
				<FatLine color="red" className="absolute -left-32 top-32" />
				<FatLine color="teal" className="absolute -left-44 top-48" />
			</div>

			{/* Bottom Right */}

			<motion.div
				className="absolute 2xl:bottom-16 bottom-4 right-6 sm:bottom-24 sm:right-1/3"
				animate={{
					rotate: [0, 0, 180, 180, 0],
				}}
				transition={{
					repeat: Infinity,
					duration: 8,
					ease: "backInOut",
					delay: rand(),
				}}
				style={{ willChange: "rotate" }}
			>
				<FaAngleDown className="text-yellow text-6xl" />
			</motion.div>

			<motion.div
				className="absolute bottom-16 2xl:bottom-48 right-20 sm:bottom-32 sm:right-2/3"
				animate={{
					rotate: [0, 0, 180, 180, 0],
				}}
				transition={{
					repeat: Infinity,
					duration: 8,
					ease: "backInOut",
					delay: rand(),
				}}
				style={{ willChange: "rotate" }}
			>
				<FaAngleDown className="text-red text-6xl" />
			</motion.div>

			{/* Remote Styles */}
			<span className="hidden" aria-hidden="true">
				<div className="hidden text-yellow bg-yellow" />
				<div className="hidden text-red bg-red" />
				<div className="hidden text-blue bg-blue" />
				<div className="hidden text-green bg-green" />
				<div className="hidden text-teal bg-teal" />
			</span>
		</div>
	);
}
