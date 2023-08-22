import Footer from "@/components/Footer/Footer";
import Galery from "@/components/Galerie/Galery";
import Header_Work from "@/components/Header_Work/Header_Work";
import Navbar from "@/components/Navbar/Navbar";
import Talk from "@/components/Talk/Talk";
import React from "react";

const work = () => {
  return (
    <div>
      <Navbar />
      <Header_Work />
      <Galery />
      <Talk />
      <Footer />
    </div>
  );
};

export default work;
