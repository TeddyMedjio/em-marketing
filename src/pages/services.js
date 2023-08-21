import Footer from "@/components/Footer/Footer";
import Header_Offer from "@/components/Header_Offer/Header_Offer";
import Header_Services from "@/components/Header_Services/Header_Services";
import Navbar from "@/components/Navbar/Navbar";
import Talk from "@/components/Talk/Talk";

const services = () => {
  return (
    <div>
      <Navbar />
      <Header_Services />
      <Header_Offer />
      <Talk />
      <Footer />
    </div>
  );
};

export default services;
