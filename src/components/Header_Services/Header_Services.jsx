const Header_Services = () => {
  return (
    <div className="relative h-screen mx-auto bg-black ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover h-full w-full opacity-30"
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
      <div className="hidden lg:flex items-center absolute top-0 right-0 text-center ">
        <h1 className=" uppercase font-heading text-5xl  text-white">
          <span>We design business</span> <br />
          <span>and brands for a more</span> <br /> <span>human future</span>
        </h1>
      </div>
      <h1 className=" pl-5 text-white text-[130px] leading-[130px] lg:text-[250px] lg:leading-[200px] uppercase absolute bottom-10">
        how <br /> we can <br /> help
      </h1>
    </div>
  );
};

export default Header_Services;
