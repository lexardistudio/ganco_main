import Head from "next/head";
import Header from "../components/Header/Header";

function Productos() {
  return (
    <>
      <Head>
        <title>Ganco | Productos</title>
        <meta
          name="Ganco Trading"
          content="Fabricación y venta de lanzas térmicas"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div>Productos</div>
    </>
  );
}

export default Productos;
