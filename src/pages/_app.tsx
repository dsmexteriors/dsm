import "@/styles/globals.css";
import "../styles/general.scss";
import "../styles/typography.scss";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Navigation from "../../components/shared/nav/Navigation";
import Footer from "../../components/shared/footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
