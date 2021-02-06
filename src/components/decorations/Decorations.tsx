import clsx from "clsx";
import { motion, SVGMotionProps } from "framer-motion";

const colors = {
	red: { DEFAULT: "#C14048", dark: "#A5323D" },
	yellow: { DEFAULT: "#E6A537", dark: "#C6882E" },
	teal: { DEFAULT: "#7FB3D7", dark: "#73A8C9" },
	green: { DEFAULT: "#4BAF87", dark: "#419370" },
};

function getColor(color: "green" | "yellow" | "teal" | "red", isDark: boolean) {
	if (color === "green")
		if (isDark) return colors.green.dark;
		else return colors.green.DEFAULT;
	if (color === "red")
		if (isDark) return colors.red.dark;
		else return colors.red.DEFAULT;
	if (color === "yellow")
		if (isDark) return colors.yellow.dark;
		else return colors.yellow.DEFAULT;
	if (color === "teal")
		if (isDark) return colors.teal.dark;
		else return colors.teal.DEFAULT;
	// Error return
	return "pink";
}

type DecorationsColorProps = {
	color?: "green" | "yellow" | "teal" | "red";
};

export function FatLine({
	color,
	...props
}: SVGMotionProps<SVGSVGElement> & DecorationsColorProps) {
	const { width, height } = props;
	const strokeWidth = 45;
	const rand = Math.random() * 4;
	return (
		<motion.svg height="125" width="400" rotate="-30deg" {...props}>
			<motion.line
				x1={strokeWidth / 2}
				y1={strokeWidth / 2}
				x2={parseInt(width?.toString() ?? "400", 10) - strokeWidth / 2}
				y2={strokeWidth / 2}
				stroke={getColor(color ?? "red", true)}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				origin="center center"
				animate={{
					y: [0, 12, 0],
					scaleX: [0.98, 0.93, 0.98],
					// @ts-expect-error: Firefox smoothing
					rotation: [0.001, 0.001, 0.001],
				}}
				transition={{
					repeat: Infinity,
					duration: 8,
					ease: "backInOut",
					delay: rand,
				}}
			/>
			<motion.line
				x1={strokeWidth / 2}
				y1={strokeWidth / 2}
				x2={parseInt(width?.toString() ?? "400", 10) - strokeWidth / 2}
				y2={strokeWidth / 2}
				stroke={getColor(color ?? "red", false)}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
			/>
		</motion.svg>
	);
}

export function DottedCircle({
	color,
	...props
}: React.SVGProps<SVGSVGElement> & DecorationsColorProps) {
	const { width } = props;
	const rand = Math.random() * 15;
	return (
		<svg height="200" width="200" fill="transparent" {...props}>
			<motion.circle
				strokeDasharray="10,20"
				cx="50%"
				cy="50%"
				r={parseInt(width?.toString() ?? "40", 10) / 2 - 3} // AYYLMAO
				stroke="white"
				strokeWidth="3"
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, ease: "linear", duration: 90 + rand }}
			/>
		</svg>
	);
}

export function SmallCircle({
	color,
	...props
}: React.SVGProps<SVGSVGElement> & DecorationsColorProps) {
	const { width } = props;
	const rand = Math.random() * 4;
	return (
		<svg height="42" width="42" {...props}>
			<motion.circle
				cx="16"
				cy="16"
				r="13"
				stroke={getColor(color ?? "yellow", false)}
				fill="transparent"
				strokeWidth="3"
			/>
			<motion.circle
				r="13"
				stroke={getColor(color ?? "yellow", false)}
				fill={getColor(color ?? "yellow", false)}
				strokeWidth="3"
				animate={{ cx: [16, 23, 16], cy: [16, 23, 16] }}
				transition={{
					repeat: Infinity,
					duration: 8,
					ease: "backInOut",
					delay: rand,
				}}
			/>
		</svg>
	);
}

export function Svg18({ ...props }: React.SVGProps<SVGSVGElement>) {
	return (
		<svg height="100%" width="100%" viewBox="-3 -3 506 506" {...props}>
			<motion.path
				stroke="white"
				strokeWidth="3"
				fill="transparent"
				initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
				animate={{
					pathLength: [0, 1, 0],
					fill: [
						"rgba(255, 255, 255, 0)",
						"rgba(255, 255, 255, 0)",
						"rgba(255, 255, 255, 1)",
					],
				}}
				transition={{ duration: 4, delay: 0 }}
				d="M0,29.1v147.3v147.3C0,405,65.9,470.9,147.3,470.9V323.6V176.4C147.3,95,81.3,29.1,0,29.1z"
			/>
			<motion.path
				stroke="white"
				strokeWidth="3"
				fill="transparent"
				initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
				animate={{
					pathLength: [0, 0.69, 0],
					fill: [
						"rgba(255, 255, 255, 0)",
						"rgba(255, 255, 255, 0)",
						"rgba(255, 255, 255, 1)",
					],
				}}
				transition={{ duration: 4, delay: 1 }}
				d="M500,176.4C500,95,434.1,29.1,352.7,29.1c-81.3,0-147.3,65.9-147.3,147.3c0,26.8,7.2,52,19.7,73.6
				c-12.5,21.7-19.7,46.8-19.7,73.6c0,81.3,65.9,147.3,147.3,147.3c81.3,0,147.3-65.9,147.3-147.3c0-26.8-7.2-52-19.7-73.6
				C492.8,228.3,500,203.2,500,176.4z M352.4,378c-27.1,0-49.1-22-49.1-49.1s22-49.1,49.1-49.1c27.1,0,49.1,22,49.1,49.1
				S379.5,378,352.4,378z M352.7,223.2c-27.1,0-49.1-22-49.1-49.1s22-49.1,49.1-49.1c27.1,0,49.1,22,49.1,49.1
				S379.9,223.2,352.7,223.2z"
			/>
		</svg>
	);
}
