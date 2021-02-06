import { DottedCircle, FatLine } from "./Decorations";

export default function HeroBackground() {
	return (
		<div
			className="absolute z-0 w-full h-full overflow-hidden"
			id="hero-background"
		>
			{/* Top Right */}

			<DottedCircle
				width="500"
				height="500"
				className="absolute -right-12 -top-32"
			/>
			<DottedCircle
				width="400"
				height="400"
				className="absolute -right-64 top-32"
			/>

			<FatLine color="yellow" className="absolute -right-28 top-52" />
			<FatLine color="red" className="absolute -right-32 top-32" />
			<FatLine color="teal" className="absolute -right-48 top-32" />

			{/* Top */}

			{/* Top Left */}
			<div className="absolute top-96">
				<FatLine color="yellow" className="absolute -left-20 top-64" />
				<FatLine color="teal" className="absolute -left-32 top-32" />
				<FatLine color="red" className="absolute -left-44 top-48" />
			</div>
		</div>
	);
}
