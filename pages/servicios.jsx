import Head from "next/head";
import Header from "../components/Header/Header";

function Servicios() {
  return (
    <>
      <Head>
        <title>Ganco | Servicios</title>
        <meta
          name="Ganco Trading"
          content="Fabricación y venta de lanzas térmicas"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div>Servicios</div>
    </>
  );
}

export default Servicios;
