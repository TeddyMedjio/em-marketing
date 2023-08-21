import Link from "next/link";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";

const Header_Services = () => {
  return (
    <div className="relative h-screen mx-auto bg-black pl-5 ">
      <div className="arrow hidden lg:block bottom-20 p-5 bg-white rounded-full opacity-80 z-50 ">
        <Link rel="stylesheet" href="#offer_services">
          <Image
            src={arrow}
            height={45}
            alt="icon arrow"
            className="animate-bounce"
          />
        </Link>
      </div>
      <div className="hidden lg:flex items-center absolute top-0 right-0 text-center ">
        <h1 className=" uppercase font-heading text-5xl  text-white">
          <span>We design business</span> <br />
          <span>and brands for a more</span> <br /> <span>human future</span>
        </h1>
      </div>
      <h1 className="text-white text-[130px] leading-[130px] lg:text-[250px] lg:leading-[200px] uppercase absolute bottom-10">
        how <br /> we can <br /> help
      </h1>
    </div>
  );
};

export default Header_Services;
