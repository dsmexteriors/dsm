import Head from "next/head";
import Hero from "../../components/shared/hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>DSM Exteriors</title>
        <meta
          name="description"
          content="Discover the artistry of DSM Exteriors through our captivating portfolio. Witness the stunning transformations achieved in siding, gutter installations, and railing and column designs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Transform Your Exterior with Expert Craftsmanship and Unparalleled Elegance"
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="View Portfolio"
        secondaryBtnLink="/portfolio"
      />
    </>
  );
}
