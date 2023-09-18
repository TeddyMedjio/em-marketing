import Head from "next/head";
import transition from "@/transition";
import Header from "@/components/Acceuil/Header";
import Navbar from "@/components/Navbar/Navbar";
import Offer from "@/components/Offert/Offer";
import Galery from "@/components/Galerie/Galery";
import About from "@/components/About/About";
import Talk from "@/components/Talk/Talk";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Em-Marketing</title>
        <meta name="description" content="Agende de Marketing Suisse" />
        <meta
          name="keywords"
          content="Agence de Marketing basée à Bern I Suisse"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Header />
        <Offer />
        <Galery />
        <About />
        <Talk />
        <Footer />
      </main>
    </>
  );
};

export default transition(Home);
