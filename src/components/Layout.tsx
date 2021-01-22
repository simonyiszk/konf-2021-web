import Head from "next/head";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<>
			<Head>
				<title>schdesign</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="" // TODO: fill description
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="18. Simonyi Konferencia" />
				<meta
					name="twitter:description"
					content="" // TODO: fill description
				/>
				<meta
					name="twitter:image"
					content="https://konferencia.simonyi.bme.hu/preview.png" // TODO: create image
				/>
				<meta
					name="thumbnail"
					content="https://konferencia.simonyi.bme.hu/preview.png" // TODO: create image
				/>
				<meta
					property="og:image"
					content="https://konferencia.simonyi.bme.hu/preview.png" // TODO: create image
				/>
				<meta property="og:title" content="18. Simonyi Konferencia" />
				<meta
					property="og:description"
					content="" // TODO: fill description
				/>
				<meta property="og:url" content="https://konferencia.simonyi.bme.hu" />
				<meta property="og:type" content="website" />
				<link rel="apple-touch-icon" href="favicon.png" />
				<link rel="image_src" type="image/png" href="favicon.png" />
				<link rel="icon" sizes="128x128" href="favicon.png" />
				<meta name="theme-color" content="#111827" />
			</Head>

			<Navbar />

			<main>{children}</main>

			<Footer />
		</>
	);
}
