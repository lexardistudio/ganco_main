import Head from "next/head";
import Header from "../components/Header/Header";

function Contacto() {
  return (
    <>
      <Head>
        <title>Ganco | Contacto</title>
        <meta
          name="Ganco Trading"
          content="Fabricación y venta de lanzas térmicas"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div>Contacto</div>
    </>
  );
}

export default Contacto;
