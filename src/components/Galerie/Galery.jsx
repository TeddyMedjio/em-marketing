import Image from "next/image";
import picture from "../../../public/img/picture.jpg";
import portrait from "../../../public/img/portrait.jpg";
import large from "../../../public/img/large.jpg";
import small from "../../../public/img/small.jpg";
import home from "../../../public/img/home.jpg";
import Link from "next/link";

const Galery = () => {
  return (
    <div className="bg-white">
      <div className=" mx-auto max-w-[90rem] relative py-24 flex flex-col items-center justify-center px-3">
        <h1 className=" font-bold text-center font-heading text-5xl text-black mb-24">
          Our Work
        </h1>
        <ul className="tableau">
          <li className="tab1">
            <Link href="#" className="relative">
              <Image src={picture} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab2">
            <Link href="#" className="relative">
              <Image src={portrait} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab3">
            <Link href="#" className=" relative">
              <Image src={picture} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab4">
            <Link href="#" className=" relative">
              <Image src={picture} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab5">
            <Link href="#" className=" relative">
              <Image src={picture} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab6">
            <Link href="#" className="relative">
              <Image src={picture} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab7">
            <Link href="#" className=" relative">
              <Image src={large} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab8">
            <Link href="#" className=" relative">
              <Image src={small} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab9">
            <Link href="#" className=" relative">
              <Image src={home} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab10">
            <Link href="#" className=" relative">
              <Image src={home} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab11">
            <Link href="#" className=" relative">
              <Image src={picture} className=" h-full w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab12">
            <Link href="#" className=" relative">
              <Image src={picture} className=" w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab13">
            <Link href="#" className=" relative">
              <Image src={picture} className=" w-full object-cover" />
              <h3 className=" opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-inter font-bold">
                  MyPlan and NFL
                </span>
              </h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Galery;
