const Header_Work = () => {
  return (
    <div className="relative h-screen mx-auto bg-[#1B2D91] ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover h-full w-full mix-blend-multiply"
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
      <div className="hidden lg:flex items-center absolute top-1/4 right-0 w-[550px] ">
        <h1 className=" font-heading text-xl text-white">
          We’ve driven results for the world’s most ambitious brands, through
          bold thinking, fearless creativity .
        </h1>
      </div>
      <h1 className=" pl-5 text-white text-[130px] leading-[130px] lg:text-[250px] lg:leading-[200px] uppercase absolute bottom-10">
        Make you move
      </h1>
    </div>
  );
};

export default Header_Work;
