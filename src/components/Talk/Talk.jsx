import Link from "next/link";

const Talk = () => {
  return (
    <div className="backgound">
      <div className="mx-auto max-w-[90rem] py-24 px-5 flex flex-col items-center justify-center">
        <h1 className="text-6xl text-white text-center mb-20 ">
          Begin your journey to growth.
        </h1>
        <Link
          href="mailto:info@em-marketing.ch"
          className="hover:bg-[#3ec25b] transition-all duration-300 uppercase font-bold text-white bg-[#189332] px-7 py-4 rounded  "
        >
          let’s talk
        </Link>
      </div>
    </div>
  );
};

export default Talk;
