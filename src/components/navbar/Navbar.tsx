import clsx from "clsx";
import { motion, useViewportScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaBars } from "react-icons/fa";

import navbarContent from "@/data/navbar.json";

import styles from "./Navbar.module.scss";

export default function Navbar() {
	const [isNavbarOpen, setNavbarOpen] = React.useState(false);
	const [isNavbarVisible, setNavbarVisible] = React.useState(false);
	const { scrollY } = useViewportScroll();
	const router = useRouter();

	React.useEffect(() => {
		scrollY.onChange((latest: number) => {
			if (latest > 10) {
				if (!isNavbarVisible) setNavbarVisible(true);
			} else {
				if (isNavbarVisible) setNavbarVisible(false);
				if (isNavbarOpen) setNavbarOpen(false);
			}
		});
		return () => {};
	}, [scrollY, isNavbarVisible, isNavbarOpen]);

	function homeButton() {
		setNavbarOpen(false);
		window.scrollTo(0, 0);
		if (router.pathname !== "/") {
			router.push("/");
		}
	}

	const variants = {
		initial: {
			"--after-w": "0%",
			rotation: 0.001,
		},
		hover: {
			"--after-w": "100%",
			rotation: 0.001,
		},
	};

	return (
		<motion.header
			className={clsx(styles.header)}
			style={{ willChange: "background-color" }}
			animate={{
				backgroundColor: isNavbarVisible
					? "rgba(39, 51, 67, 1)"
					: "rgba(39, 51, 67, 0)",
			}}
			id="header"
		>
			<div className="flex relative flex-wrap justify-start items-center px-2 sm:px-8 mx-auto w-full">
				<div className="flex sm:block relative sm:static justify-between sm:justify-start w-full sm:w-auto">
					<span
						className="flex items-center mr-4 text-2xl lg:text-4xl lg:leading-10 no-underline cursor-pointer"
						onClick={homeButton}
						onKeyPress={homeButton}
						role="button"
						tabIndex={0}
					>
						<span className="inline-block relative my-4 mx-2 w-12 h-12">
							<Image src="/18.svg" layout="fill" />
						</span>
					</span>

					<button
						className="block sm:hidden py-2 px-3 text-xl leading-none bg-transparent rounded border border-transparent border-solid cursor-pointer outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!isNavbarOpen)}
						aria-label="Navbar toggler"
					>
						<FaBars />
					</button>
				</div>
				<nav
					className={clsx(
						"sm:flex z-50 items-center w-full sm:w-auto",
						isNavbarOpen ? "flex" : "hidden",
					)}
				>
					<ul className="flex flex-col sm:flex-row sm:ml-auto w-full sm:w-auto list-none rounded-lg">
						{navbarContent.links.map(({ href, label }, i) => (
							<li key={`${href}`} className="py-1 pl-2 sm:pl-0 w-full">
								<Link href={href} passHref>
									<motion.a
										role="link"
										tabIndex={i}
										className={clsx(
											styles.navlink,
											"inline-block py-2 px-2 sm:px-5 w-full text-xl sm:text-2xl font-normal lowercase cursor-pointer hover:text-pink",
											i === 0 && "sm:pl-2",
											i === navbarContent.links.length - 1 && "sm:pr-2",
										)}
										onClick={() => setNavbarOpen(false)}
										onKeyPress={() => setNavbarOpen(false)}
										// @ts-expect-error: Variants work, I don't know why it is an error
										variants={variants}
										initial="initial"
										whileHover="hover"
										whileFocus="hover"
										transition={{ duration: 0.3 }}
									>
										{label}
									</motion.a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</motion.header>
	);
}
