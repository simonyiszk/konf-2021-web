import Image from "next/image";
import Link from "next/link";

import Button from "../button/Button";
import styles from "./Giveaway.module.scss";

export default function Giveaway() {
	return (
		<section
			className="scroll-margin container mb-8 mx-auto px-3 text-center"
			id="nyeremenyjatek"
		>
			<h2 className="mb-8 text-4xl">Nyereményjáték</h2>
			<h3 className="mb-3 text-2xl">
				Regisztrálj és nyerj egy{" "}
				<span className="text-yellow">ultrawide monitort</span> az expón és
				konferencián való aktív részvételért!
			</h3>
			<h3 className="mb-4 text-2xl">
				Online nyereményjátékunkon pedig egy{" "}
				<span className="text-yellow">hordozható hangfalat</span> nyerhettek.
			</h3>
			<h4 className={styles.extra}>
				Az előadásokon való kérdezésért további értékes nyereményekkel
				gazdagodhatsz!
			</h4>
			<div className="flex flex-wrap items-center justify-evenly p-4 px-1 w-full">
				<div>
					<Image
						src="/assets/images/monitor_2000.gif"
						className="pointer-events-none"
						layout="intrinsic"
						width={500}
						height={275}
					/>
					<Link
						href="https://hopin.com/events/xviii-simonyi-konferencia"
						passHref
					>
						<Button target="_blank" className="mt-4">
							Regisztrálok
						</Button>
					</Link>
				</div>
				<div>
					<Image
						src="/assets/images/jbl-blue.png"
						className="pointer-events-none"
						layout="intrinsic"
						width={500}
						height={275}
					/>
					<Link href="/onlinenyeremenyjatek" passHref>
						<Button href="" className="mt-4">
							Megnézem
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
