import Head from "next/head";

export default function GiveawayPage() {
	return (
		<>
			<Head>
				<title>Simonyi Konferencia Online Nyeremény</title>
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
					content="A játékban való részvételhez: Lájkold ezt a Facebook posztot.
					Kövesd be a @simonyikonf oldalát Instagramon.
					Oszd meg ezt a bejegyzést az Instagram storydban megjelölve a @simonyikonf oldalát.
					Játék vége: 2021. 04. 13. 12:00.
					A nyertest a XVIII. Simonyi Konferencián, 2021. 04. 14-én 17:30 és 18:00 között fogjuk kihírdetni.
					Az eseményre regisztrálni a konferencia.simonyi.bme.hu oldalon tudtok."
				/>

				<style
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: `*{margin:0;padding:0;border:none;} html,iframe,body{width:100%;height:100%;} html{overflow:hidden} @media screen and (-webkit-min-device-pixel-ratio:0) {html,iframe,body,#__next{min-height:100%;}}iframe{height:100vh}`,
					}}
				/>
			</Head>

			<iframe
				src="https://gleam.io/vRS37/simonyi-konferencia-online-nyeremeny"
				frameBorder="0"
				allowFullScreen
				title="Giveaway"
			/>
		</>
	);
}
