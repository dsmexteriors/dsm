import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Navigation from "../../components/shared/nav/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/shared/footer/Footer";

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
