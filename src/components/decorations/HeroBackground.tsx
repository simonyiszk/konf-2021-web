import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

import { DottedCircle, FatLine, SmallCircle } from "./Decorations";

export default function HeroBackground() {
	const rand = () => {
		return Math.random() * 4;
	};
	return (
		<div
			className="overflow-hidden absolute w-screen h-screen"
			id="hero-background"
		>
			{/* Grids */}

			<div className="sm:block absolute top-0 left-1/2" id="tm">
				<img className="" src="/assets/images/topmid.svg" alt="" />
			</div>

			<div className="hidden sm:block absolute top-0 right-0" id="tr">
				<img className="" src="/assets/images/topright.svg" alt="" />
			</div>

			<div className="sm:block absolute bottom-0 left-0" id="bl">
				<img className="" src="/assets/images/botleft.svg" alt="" />
			</div>

			<div className="hidden sm:block absolute right-0 bottom-0" id="br">
				<img className="" src="/assets/images/botright.svg" alt="" />
			</div>

			{/* Top Left */}

			<DottedCircle
				width="500"
				height="500"
				className="hidden sm:block absolute -top-48 -left-28"
			/>

			<div className="grid absolute top-8 sm:top-28 left-6 xl:left-28 grid-cols-5 gap-3">
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
				className="absolute -top-80 -right-12"
			/>
			<DottedCircle
				width="400"
				height="400"
				className="absolute top-32 -right-64"
			/>

			<div className="absolute -top-8 left-2/3">
				<svg
					height="112"
					width="112"
					fill="#4BAF87"
					className="hidden sm:block absolute -top-8 right-8"
				>
					<circle cx="50%" cy="50%" r="55" />
				</svg>
				<svg
					height="300"
					width="300"
					fill="#C14048"
					className="hidden sm:block absolute -top-32 -left-24"
				>
					<circle cx="50%" cy="50%" r="145" />
				</svg>
				<div
					style={{
						width: "200px",
						height: "200px",
					}}
					className="hidden sm:block absolute -top-16 left-20"
				>
					<img src="/assets/images/circle.svg" alt="" />
				</div>
				<svg
					height="200"
					width="200"
					fill="#E6A537"
					className="hidden sm:block absolute -top-16 left-20"
				>
					<circle cx="50%" cy="50%" r="85" />
				</svg>
			</div>

			<div className="absolute top-4 2xl:top-28 -right-60 xl:-right-48 2xl:-right-8">
				<FatLine color="red" className="absolute top-20 right-0" />
				<FatLine color="yellow" className="absolute top-0 -right-4" />
				<FatLine color="teal" className="absolute top-0 -right-20" />
			</div>

			{/* Bottom Left */}

			<div className="absolute bottom-56 sm:bottom-1/2 2xl:bottom-96 -left-40 sm:-left-4 2xl:left-0">
				<FatLine color="yellow" className="absolute top-64 -left-20" />
				<FatLine color="red" className="absolute top-32 -left-32" />
				<FatLine color="teal" className="absolute top-48 -left-44" />
			</div>

			{/* Bottom Right */}

			<motion.div
				className="absolute right-6 sm:right-1/3 bottom-4 sm:bottom-24 2xl:bottom-16"
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
				<FaAngleDown className="text-6xl text-yellow" />
			</motion.div>

			<motion.div
				className="absolute right-20 sm:right-2/3 bottom-16 sm:bottom-32 2xl:bottom-48"
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
				<FaAngleDown className="text-6xl text-red" />
			</motion.div>
		</div>
	);
}
