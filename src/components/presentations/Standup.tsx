import Image from "next/image";
import Link from "next/link";

import Button from "../button/Button";

export default function Standup() {
	return (
		<figure className="container flex flex-col-reverse justify-evenly mb-8 mx-auto px-6 text-center md:flex-row">
			<figcaption className="flex flex-col content-center justify-center md:mr-4">
				<h3 className="text-xl md:text-2xl">
					A nap zárásaként hallgasd meg
					<br />
					<span className="text-yellow text-2xl font-semibold leading-relaxed md:text-3xl md:leading-relaxed">
						Rekop György
					</span>
					<br />a Showder Klub humoristájának
					<br />
					stand-up comedy előadását!
				</h3>
				<Link href="https://fb.me/e/1jCeeZwOA" passHref>
					<Button target="_blank" className="mt-4 md:mt-8">
						Megnézem
					</Button>
				</Link>
			</figcaption>
			<div>
				<Image
					src="/assets/images/rekop.png"
					layout="intrinsic"
					width={500}
					height={500}
				/>
			</div>
		</figure>
	);
}
