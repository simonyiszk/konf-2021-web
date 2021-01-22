import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

import navbarContent from "@/data/navbar.json";

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<header
			className="navbar-expand-lg relative z-40 flex flex-wrap items-center justify-between mb-3 text-white bg-blue"
			id="header"
		>
			<div className="flex flex-wrap items-center justify-between mx-auto p-4 w-full lg:p-8">
				<div className="relative flex justify-between w-full lg:static lg:block lg:justify-start lg:w-auto">
					<Link href="/">
						<a className="no-underline text-4xl lg:text-7xl">18</a>
					</Link>
					<button
						className="block px-3 py-2 text-xl leading-none bg-transparent border border-solid border-transparent rounded outline-none focus:outline-none cursor-pointer lg:hidden"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<FaBars />
					</button>
				</div>
				<nav
					className={clsx(
						"z-50 flex-grow items-center lg:flex",
						navbarOpen ? "flex" : " hidden",
					)}
				>
					<ul className="font-RobotoMono flex flex-col w-full list-none lowercase lg:flex-row lg:ml-auto lg:w-auto">
						{navbarContent.links.map(({ href, label }, i) => (
							<li key={`${href}`} className="pl-2 py-1 w-full lg:pl-0">
								<Link href={href}>
									<a
										className={clsx(
											"hover:text-pink inline-block py-2 w-full text-xl font-medium lg:px-5 lg:text-2xl",
											i === 0 && "lg:pl-0",
											i === navbarContent.links.length - 1 && "lg:pr-0",
										)}
									>
										{label}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
