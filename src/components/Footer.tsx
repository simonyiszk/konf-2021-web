import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<footer
			className="mt-8 p-8 w-full text-white bg-yellow rounded-t-2xl"
			id="footer"
		>
			<div className="container flex flex-col items-center justify-center mx-auto space-y-6">
				<div className="flex items-center justify-evenly w-full lg:w-1/3">
					<a
						href="https://www.instagram.com/simonyikonf/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="w-10 h-auto hover:text-blue text-blue-dark" />
					</a>
					<a
						href="https://www.facebook.com/simonyiszk"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookSquare className="w-10 h-auto hover:text-blue text-blue-dark" />
					</a>
					<a
						href="https://www.youtube.com/user/SimonyiSzakkoli/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaYoutube className="w-10 h-auto hover:text-blue text-blue-dark" />
					</a>
				</div>
				<div className="flex items-center justify-center">
					<a
						href="https://simonyi.bme.hu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/assets/images/simonyi_color.svg"
							alt="Simonyi Károly Szakkollégium"
							className="w-auto h-16"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}
