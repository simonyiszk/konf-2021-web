import clsx from "clsx";
import { motion, useViewportScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

import navbarContent from "@/data/navbar.json";

import styles from "./Navbar.module.scss";

export default function Navbar() {
	const [isNavbarOpen, setNavbarOpen] = React.useState(false);
	const [isNavbarVisible, setNavbarVisible] = React.useState(false);
	const { scrollY, scrollYProgress } = useViewportScroll();

	React.useEffect(() => {
		scrollY.onChange((latest: number) => {
			if (latest > 10) {
				if (!isNavbarVisible) setNavbarVisible(true);
			} else if (isNavbarVisible) setNavbarVisible(false);
		});
		return () => {};
	}, [scrollY, isNavbarVisible]);

	function scrollToTop() {
		setNavbarOpen(false);
		window.scrollTo(0, 0);
	}

	return (
		<motion.header
			className={clsx(styles.header, "bg-blur-10")}
			style={{ willChange: "top" }}
			animate={{ top: isNavbarVisible ? 0 : -100 }}
			initial={{ top: -100 }}
			id="header"
		>
			<div className="relative flex flex-wrap items-center justify-between mx-auto px-2 w-full sm:px-8">
				<div className="relative flex justify-between w-full sm:static sm:block sm:justify-start sm:w-auto">
					<span
						className="flex items-center mr-2 no-underline text-2xl cursor-pointer lg:text-4xl lg:leading-10"
						onClick={scrollToTop}
						onKeyPress={scrollToTop}
						role="button"
						tabIndex={0}
					>
						<span className="relative inline-block mx-2 my-4 w-12 h-12">
							<Image src="/18.svg" layout="fill" />
						</span>
					</span>

					<button
						className="block px-3 py-2 text-xl leading-none bg-transparent border border-solid border-transparent rounded outline-none focus:outline-none cursor-pointer sm:hidden"
						type="button"
						onClick={() => setNavbarOpen(!isNavbarOpen)}
						aria-label="Navbar toggler"
					>
						<FaBars />
					</button>
				</div>
				<nav
					className={clsx(
						"z-50 items-center w-full sm:flex sm:w-auto",
						isNavbarOpen ? "flex" : "hidden",
					)}
				>
					<ul className="flex flex-col w-full rounded-lg list-none sm:flex-row sm:ml-auto sm:w-auto">
						{navbarContent.links.map(({ href, label }, i) => (
							<li key={`${href}`} className="pl-2 py-1 w-full sm:pl-0">
								<Link href={href}>
									<a
										className={clsx(
											"hover:text-pink inline-block px-2 py-2 w-full text-xl font-medium sm:px-5 sm:text-2xl",
											i === 0 && "sm:pl-2",
											i === navbarContent.links.length - 1 && "sm:pr-2",
										)}
										onClick={() => setNavbarOpen(false)}
										onKeyPress={() => setNavbarOpen(false)}
										role="link"
										tabIndex={i}
									>
										{label}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</motion.header>
	);
}
