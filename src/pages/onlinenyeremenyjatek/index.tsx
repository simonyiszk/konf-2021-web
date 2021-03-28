import Head from "next/head";

import Layout from "@/components/Layout";

export default function GiveawayPage() {
	return (
		<Layout>
			<Head>
				<title>Online nyereményjáték a XVIII. Simonyi Konferencián</title>
				<meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
				<meta name="viewport" content="width=device-width, user-scalable=0" />
				<meta
					property="og:url"
					content="https://gleam.io/vRS37/simonyi-konferencia-online-nyeremeny"
				/>
				<meta
					property="og:title"
					content="Nyerj egy JBL FLIP ESSENTIAL hordozható hangszórót a XVIII. Simonyi Konferencia online nyereményjátékán!"
				/>
				<meta property="twitter:card" content="summary" />
				<meta property="fb:app_id" content="152351391599356" />
				<meta
					property="og:description"
					content="Nyerj egy JBL FLIPESSENTIAL hordozható hangszórót a XVIII. Simonyi Konferencia online nyereményjátékán!
					A játékban való részvételhez teljesítsd az oldalon található lépéseket 2021. 04. 13. 12:00-ig."
				/>

				<style
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: `*{margin:0;padding:0;border:none;} html,iframe,body{width:100%;height:100%;} html{overflow:hidden} @media screen and (-webkit-min-device-pixel-ratio:0) {html,iframe,body,#__next{min-height:100%;}}iframe{height:100vh;padding-top:80px}`,
					}}
				/>
			</Head>

			<iframe
				src="https://gleam.io/vRS37/simonyi-konferencia-online-nyeremeny"
				frameBorder="0"
				allowFullScreen
				title="Giveaway"
			/>
		</Layout>
	);
}
