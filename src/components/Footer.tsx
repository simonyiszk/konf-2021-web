import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="p-8 w-full text-white bg-yellow" id="footer">
			<div className="container flex flex-col content-center justify-center mx-auto text-center">
				<div className="flex justify-evenly mx-auto pb-4 w-full lg:w-1/3">
					<a href="https://www.instagram.com/schdesign.hu/">
						<FaInstagram className="w-10 h-auto" />
					</a>
					<a href="https://www.facebook.com/schonherzdesignstudio/">
						<FaFacebookSquare className="w-10 h-auto" />
					</a>
				</div>
				<div className="flex flex-col items-center justify-evenly mx-auto pb-4 md:flex-row md:w-2/3">
					<a href="https://sch.bme.hu" target="_blank" rel="noreferrer">
						<img
							className="pb-4 w-40 md:pb-0 md:h-24"
							src="assets/images/footer-logo-sch.svg"
							alt="Schönherz Zoltán Kollégium"
						/>
					</a>
					<a href="https://simonyi.bme.hu" target="_blank" rel="noreferrer">
						<img
							className="pb-4 w-56 md:pb-0 md:h-24"
							src="assets/images/footer-logo-simonyi.svg"
							alt="Simonyi Károly Szakkollégium"
						/>
					</a>
					<a href="https://vik.bme.hu" target="_blank" rel="noreferrer">
						<img
							className="pb-4 w-40 md:pb-0 md:h-24"
							src="assets/images/footer-logo-vik.svg"
							alt="BME Villamosmérnöki és Infromatikai kar"
						/>
					</a>
				</div>
				<p className="text-gray-400 text-xs">
					© Simonyi Károly Szakkollégium 2021
				</p>
			</div>
		</footer>
	);
}
