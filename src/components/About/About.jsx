import arow from "../../../public/arrowtwo.svg";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#E7ECF2] py-24 px-5">
      <div className="mx-auto max-w-[90rem] flex flex-col items-end justify-end mb-20">
        <div className="">
          <p className=" text-xs max-w-xl">
            Are you ready to make a lasting impact in the digital realm? Look no
            further than E-Marketing, your comprehensive solution for all your
            online marketing needs. With our extensive range of services, we
            empower businesses like yours to thrive in the digital age. Our team
            of dedicated professionals is here to propel your brand forward,
            harnessing the power of cutting-edge strategies and innovative
            techniques. Get ready to unlock the full potential of your online
            presence!
          </p>

          <Link href="/about" className="flex items-center mt-10">
            <p className="text-xs font-bold underline mr-1"> Learn More</p>
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8271 11.1303L12.7662 2.18427L4.15461 0.761549M12.0335 2.70673L1.33624 10.3345"
                stroke="black"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className=" font-bold text-center font-heading text-5xl text-black mb-20">
          About
        </h1>
        <p className="text-center font-bold text-5xl lg:text-7xl uppercase ">
          <span>We design businesses</span>
          <br />
          and{" "}
          <span className="bg-gradient-to-r from-[#1B2D91]  via-[#189332] to-blue-500 text-transparent bg-clip-text animate-gradient">
            brand
          </span>{" "}
          for a more
          <br />
          human{" "}
          <span className=" bg-gradient-to-r from-[#1B2D91]  via-blue-500 to-[#189332] text-transparent bg-clip-text animate-gradient">
            future
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
