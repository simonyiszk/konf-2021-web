import "../styles/core.css";
import "../styles/components.css";
import "../styles/utilities.css";

import type { AppProps } from "next/app";

export default function KonfApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
