import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

import navbarContent from "@/data/navbar.json";

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<header
			className="navbar-expand-sm fixed z-40 top-0 flex flex-wrap items-center justify-between mb-3 w-screen text-white bg-blue"
			id="header"
		>
			<div className="relative flex flex-wrap items-center mx-auto p-4 w-full sm:p-8">
				<div className="relative flex justify-between w-full sm:static sm:block sm:justify-start sm:w-auto">
					<Link href="/">
						<a className="pr-8 no-underline text-4xl lg:text-7xl lg:leading-10">
							18
						</a>
					</Link>
					<button
						className="block px-3 py-2 text-xl leading-none bg-transparent border border-solid border-transparent rounded outline-none focus:outline-none cursor-pointer sm:hidden"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<FaBars />
					</button>
				</div>
				<nav
					className={clsx(
						"z-50 items-center sm:flex",
						navbarOpen ? "flex" : " hidden",
					)}
					id="navbar"
				>
					<ul className="flex flex-col font-Roboto list-none lowercase sm:flex-row sm:ml-auto sm:w-auto">
						{navbarContent.links.map(({ href, label }, i) => (
							<li key={`${href}`} className="pl-2 py-1 w-full sm:pl-0">
								<Link href={href}>
									<a
										className={clsx(
											"hover:text-pink inline-block py-2 w-full text-xl font-medium sm:px-5 sm:text-2xl",
											i === 0 && "sm:pl-0",
											i === navbarContent.links.length - 1 && "sm:pr-0",
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
