export default function Hero() {
	return (
		<section
			className="relative pt-8 w-full h-screen bg-gray-900"
			id="hero-container"
		>
			<div className="flex flex-col justify-center h-full">
				<div
					className="w-fit container grid grid-cols-3 mx-auto font-GothamPro leading-none"
					id="hero-text"
				>
					<h1 className="row-span-2 font-bold" id="hero-number">
						18
					</h1>
					<h1
						className="col-span-2 text-yellow font-bold uppercase"
						id="hero-simonyi"
					>
						Simonyi
					</h1>
					<h1 className="col-span-2 uppercase" id="hero-konf">
						Konferencia
					</h1>
					<div className="grid col-span-3 grid-cols-3 mt-12">
						<hr className="border-t-3 self-center mx-3 rounded-full" />
						<h2 className="text-center font-Roboto text-5xl font-bold">
							2021.04.14.
						</h2>
						<hr className="border-t-3 self-center mx-3 rounded-full" />
					</div>
				</div>
			</div>
		</section>
	);
}
