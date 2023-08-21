import Image from "next/image";
import arrow from "../../../public/arrow.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative h-screen mx-auto">
      <div className="arrow bottom-20 p-5 bg-white rounded-full opacity-80 z-50 ">
        <Link rel="stylesheet" href="#offer">
          <Image
            src={arrow}
            height={45}
            alt="icon arrow"
            className="animate-bounce"
          />
        </Link>
      </div>
      <div className="hidden lg:flex items-center absolute top-0 right-0 text-center ">
        <h1 className=" uppercase font-heading font-bold text-5xl mix-blend-exclusion text-white">
          <span>We design business</span> <br />
          <span>and brands for a more</span> <br /> <span>human future</span>
        </h1>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover h-full w-full"
        poster="https://res.cloudinary.com/rga/video/upload/so_0,q_10/f_auto/q_auto/v1636982937/rga.com/RGA-WebHero-05_1_qs6x7a.jpg"
      >
        <source
          src="https://res.cloudinary.com/rga/video/upload/f_auto/q_auto/v1636982937/rga.com/RGA-WebHero-05_1_qs6x7a.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/rga/video/upload/f_auto/q_auto/v1636982937/rga.com/RGA-WebHero-05_1_qs6x7a.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/rga/video/upload/f_auto/q_auto/v1636982937/rga.com/RGA-WebHero-05_1_qs6x7a.ogv"
          type="video/ogv"
        />
      </video>
    </div>
  );
};

export default Header;
