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
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Finsura Ag&apos;s funny campaign!
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab2">
            <Link
              target="blank"
              href="https://www.instagram.com/reel/Cw7fKgbNd8k/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              className="relative text-center"
            >
              <Image
                src={adverting}
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Finsura Ag&apos;s new funny campaign!
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab3">
            <Link
              target="blank"
              href="https://notary-virid.vercel.app/"
              className=" relative text-center"
            >
              <Image
                src={notary}
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Website prototype for notary
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab4">
            <Link href="#" className=" relative text-center">
              <Image
                src={berny}
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Flyers Corporate
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab5">
            <Link href="#" className=" relative text-center">
              <Image
                src={poulet}
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Logotype
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab6">
            <Link href="#" className="relative text-center">
              <Image
                src={magasine}
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Magazine design
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab7">
            <Link href="#" className=" relative text-center">
              <Image
                src={large}
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Design Logotype for Hotel
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab8">
            <Link href="#" className=" relative text-center">
              <Image
                src={application}
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Mobile app design
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab9">
            <Link
              target="blank"
              href="https://medjio.me/"
              className=" relative text-center"
            >
              <Image
                src={home}
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Design porfolio for Graphic designer
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab10">
            <Link href="#" className=" relative text-center">
              <Image
                src={app}
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  App design
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab11">
            <Link href="#" className=" relative text-center">
              <Image
                src={media}
                className=" h-full w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Social media post
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab12">
            <Link href="#" className=" relative text-center">
              <Image
                src={webdesign}
                className=" w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Webdesign for website
                </span>
              </h3>
            </Link>
          </li>
          <li className="tab13">
            <Link href="#" className=" relative text-center">
              <Image
                src={emagasine}
                className=" w-full object-cover"
                alt="picture"
              />
              <h3 className=" bg-[#189332] bottom-0 lg:opacity-0 lg:hover:opacity-100 absolute lg:top-0 lg:hover:bg-[#189332] lg:h-full w-full transition-all duration-300 flex items-center justify-center">
                <span className="text-white lg:text-xl font-inter lg:font-bold w-4/5">
                  Webdesign for website magasine
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
