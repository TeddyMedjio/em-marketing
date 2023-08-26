import Link from "next/link";

const Offer = () => {
  return (
    <div className="backgound">
      <div
        id="offer"
        className="flex items-center justify-center flex-col pt-24 px-5"
      >
        <span className=" font-bold font-heading text-5xl text-white">
          We offer expertise in:
        </span>
        <ul className=" flex flex-wrap max-w-[780px] gap-5 my-24">
          <li className="border-t-[1px] flex-1 basis-[250px] mb-10">
            <Link href="/services">
              <span className=" font-inter text-white text-xl ">
                Website Creation
              </span>
            </Link>
          </li>
          <li className="border-t-[1px] flex-1 basis-[250px] mb-10">
            <Link href="/services">
              <span className=" font-inter text-white text-xl">
                Graphic & 3D Design
              </span>
            </Link>
          </li>
          <li className="border-t-[1px] flex-1 basis-[250px] mb-10">
            <Link href="/services">
              <span className=" font-inter text-white text-xl">
                Social Media Page Administration
              </span>
            </Link>
          </li>
          <li className="border-t-[1px] flex-1 basis-[250px] mb-10">
            <Link href="/services">
              <span className=" font-inter text-white text-xl">
                Swiss Influencer Cyrille David
              </span>
            </Link>
          </li>
          <li className="border-t-[1px] flex-1 basis-[250px] mb-10">
            <Link href="/services">
              <span className=" font-inter text-white text-xl">
                SEO Marketing
              </span>
            </Link>
          </li>
          <li className="border-t-[1px] flex-1 basis-[250px] mb-10">
            <Link href="/services">
              <span className=" font-inter text-white text-xl">Animation</span>
            </Link>
          </li>
          <li className="border-t-[1px] flex-1 basis-[250px] mb-10">
            <Link href="/services">
              <span className=" font-inter text-white text-xl">
                Video Shooting & Editing
              </span>
            </Link>
          </li>
          <li className="border-t-[1px] flex-1 basis-[250px] mb-10">
            <Link href="/services">
              <span className=" font-inter text-white text-xl">
                Event Marketing Promotions
              </span>
            </Link>
          </li>
          <li className="border-t-[1px] flex-1 basis-[250px] mb-10">
            <Link href="/services">
              <span className=" font-inter text-white text-xl">
                Web & App design
              </span>
            </Link>
          </li>
          <li className="border-t-[1px] flex-1 basis-[250px] mb-10">
            <Link href="/services">
              <span className=" font-inter text-white text-xl">
                Company Jingle Creation
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Offer;
