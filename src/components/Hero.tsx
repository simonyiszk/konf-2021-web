import clsx from "clsx";

export default function Hero() {
	return (
		<section
			className="relative pt-8 w-full h-screen bg-gray-900"
			id="hero-container"
		>
			<div className="flex flex-col justify-center h-full">
				<div
					className="w-fit container grid mx-auto px-3 font-GothamPro leading-none lg:px-0"
					id="hero-text"
				>
					<img
						className={clsx(
							"col-span-2 self-center mr-4 w-40 h-40",
							"sm:col-span-1 sm:row-span-2 sm:justify-self-end",
							"sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72",
						)}
						id="hero-number"
						src="/assets/images/18.svg"
						alt="18."
					/>
					<h1
						className={clsx(
							"col-span-2 self-center text-yellow text-hero-simonyi font-bold uppercase",
							"self-end sm:col-span-1",
							"sm:text-hero-simonyi-sm md:text-hero-simonyi-md lg:text-hero-simonyi-lg xl:text-hero-simonyi-xl",
						)}
						id="hero-simonyi"
					>
						Simonyi
					</h1>
					<h1
						className={clsx(
							"col-span-2 self-center text-hero-konf uppercase",
							"self-start sm:col-span-1",
							"sm:text-hero-konf-sm md:text-hero-konf-md lg:text-hero-konf-lg xl:text-hero-konf-xl",
						)}
						id="hero-konf"
					>
						Konferencia
					</h1>
					<div className="grid col-span-2 mt-8" id="hero-date">
						<hr className="border-t-3 self-center mx-3 w-auto rounded-full" />
						<h2
							className={clsx(
								"mx-4 text-center font-Roboto text-2xl font-bold",
								"sm:text-3xl md:text-4xl lg:text-5xl",
							)}
						>
							2021.04.14.
						</h2>
						<hr className="border-t-3 self-center mx-3 w-auto rounded-full" />
					</div>
				</div>
			</div>
		</section>
	);
}
