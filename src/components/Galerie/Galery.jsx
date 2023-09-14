import Image from "next/image";
import picture from "../../../public/img/picture.jpg";
import adverting from "../../../public/img/finsura_adverting.jpg";
import finsura from "../../../public/img/finsura.jpg";
import notary from "../../../public/img/notary.jpg";
import berny from "../../../public/img/berny.jpg";
import poulet from "../../../public/img/poulet.jpg";
import magasine from "../../../public/img/magasine.jpg";
import media from "../../../public/img/media.jpg";
import webdesign from "../../../public/img/webdesign.jpg";
import app from "../../../public/img/app.jpg";
import emagasine from "../../../public/img/emagasine.jpg";
import large from "../../../public/img/large.jpg";
import application from "../../../public/img/application.jpg";
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
            <Link
              target="blank"
              href="https://www.instagram.com/reel/Cw1-noyNiUb/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              className="relative text-center"
            >
              <Image
                src={finsura}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5 ">
                  E-Marketing presents: Finsura Ag&apos;s new funny campaign!
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">
              E-Marketing presents: Finsura Ag&apos;s new funny campaign!
            </h3>
          </li>
          <li className="tab2">
            <Link
              target="blank"
              href="https://www.instagram.com/reel/Cw7fKgbNd8k/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              className="relative text-center"
            >
              <Image
                src={adverting}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  Finsura Ag&apos;s new funny campaign!
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">
              Finsura Ag&apos;s new funny campaign!
            </h3>
          </li>
          <li className="tab3">
            <Link
              target="blank"
              href="https://notary-virid.vercel.app/"
              className=" relative text-center"
            >
              <Image
                src={notary}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold  w-4/5">
                  Website prototype for notary
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">
              Website prototype for notary
            </h3>
          </li>
          <li className="tab4">
            <Link href="#" className=" relative text-center">
              <Image
                src={berny}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  Flyers Corporate
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">Flyers Corporate</h3>
          </li>
          <li className="tab5">
            <Link href="#" className=" relative text-center">
              <Image
                src={poulet}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  Logotype
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">Logotype</h3>
          </li>
          <li className="tab6">
            <Link href="#" className="relative text-center">
              <Image
                src={magasine}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  Magazine design
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">Magazine design</h3>
          </li>
          <li className="tab7">
            <Link href="#" className=" relative text-center">
              <Image
                src={large}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  Design Logotype for Hotel
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">
              Design Logotype for Hotel
            </h3>
          </li>
          <li className="tab8">
            <Link href="#" className=" relative text-center">
              <Image
                src={application}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  Mobile app design
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">Mobile app design</h3>
          </li>
          <li className="tab9">
            <Link
              target="blank"
              href="https://medjio.me/"
              className=" relative text-center"
            >
              <Image
                src={home}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  Design porfolio for Graphic designer
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">
              Design porfolio for Graphic designer
            </h3>
          </li>
          <li className="tab10">
            <Link href="#" className=" relative text-center">
              <Image
                src={app}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  App design
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">App design</h3>
          </li>
          <li className="tab11">
            <Link href="#" className=" relative text-center">
              <Image
                src={media}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  Social media post
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">Social media post</h3>
          </li>
          <li className="tab12">
            <Link href="#" className=" relative text-center">
              <Image
                src={webdesign}
                className=" w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  Webdesign for website
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">
              Webdesign for website
            </h3>
          </li>
          <li className="tab13">
            <Link href="#" className=" relative text-center">
              <Image
                src={emagasine}
                className=" w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5">
                  Webdesign for website magasine
                </span>
              </h3>
            </Link>
            <h3 className="lg:hidden text-xl font-inter">
              Webdesign for website magasine
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Galery;
