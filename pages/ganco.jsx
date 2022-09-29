import Head from "next/head";
import Header from "../components/Header/Header";

function Ganco() {
  return (
    <>
      <Head>
        <title>Ganco | Quienes Somos</title>
        <meta
          name="Ganco Trading"
          content="Fabricación y venta de lanzas térmicas"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div>Quienes Somos</div>
    </>
  );
}

export default Ganco;
