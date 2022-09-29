import Head from "next/head";
import Header from "../components/Header/Header";
import SliderClients from "../components/Slide/SliderClients";
import SliderHero from "../components/Slide/SliderHero";
import SliderProducts from "../components/Slide/SliderProducts";
import SliderServices from "../components/Slide/SliderServices";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ganco | Fabricación y venta de lanzs térmicas</title>
        <meta
          name="Ganco Trading"
          content="Fabricación y venta de lanzas térmicas"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <SliderHero />
      <SliderProducts />
      <SliderServices />
      <SliderClients />
      <Footer />
    </>
  );
}
