import Image from "next/image";
import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 50,
      staggerChildren: 20,
    },
  },
};

const item = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Galery = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[90rem] relative py-24 flex flex-col items-center justify-center px-3">
        <h1 className=" font-bold text-center font-heading text-5xl text-black mb-24">
          Our Work
        </h1>
        <motion.ul
          className="container space-y-10 md:space-y-0 tableau"
          variants={container}
        >
          <motion.li
            className="tab1 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link
              target="blank"
              href="https://www.instagram.com/reel/Cw1-noyNiUb/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            >
              <Image
                src={finsura}
                className=" lg:h-full w-full object-cover"
                alt="picture"
              />
              <h3 className="hidden lg:flex opacity-0 hover:opacity-100 absolute top-0 hover:bg-[#189332] h-full w-full transition-all duration-300 items-center justify-center">
                <span className="text-white text-xl font-inter font-bold w-4/5  ">
                  E-Marketing presents: Finsura Ag&apos;s new funny campaign!
                </span>
              </h3>
            </Link>
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              E-Marketing presents: Finsura Ag&apos;s new funny campaign!
            </h3>
          </motion.li>
          <motion.li
            className="tab2 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link
              target="blank"
              href="https://www.instagram.com/reel/Cw7fKgbNd8k/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Finsura Ag&apos;s new funny campaign!
            </h3>
          </motion.li>
          <motion.li
            className="tab3 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link target="blank" href="https://notary-virid.vercel.app/">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Website prototype for notary
            </h3>
          </motion.li>
          <motion.li
            className="tab4 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link href="#">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Flyers Corporate
            </h3>
          </motion.li>
          <motion.li
            className="tab5 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link href="#">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Logotype
            </h3>
          </motion.li>
          <motion.li
            className="tab6 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link href="#">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Magazine design
            </h3>
          </motion.li>
          <motion.li
            className="tab7 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link href="#">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Design Logotype for Hotel
            </h3>
          </motion.li>
          <motion.li
            className="tab8 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link href="#">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Mobile app design
            </h3>
          </motion.li>
          <motion.li
            className="tab9 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link target="blank" href="https://medjio.me/">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Design porfolio for Graphic designer
            </h3>
          </motion.li>
          <motion.li
            className="tab10 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link href="#">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              App design
            </h3>
          </motion.li>
          <motion.li
            className="tab11 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link href="#">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Social media post
            </h3>
          </motion.li>
          <motion.li
            className="tab12 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link href="#">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Webdesign for website
            </h3>
          </motion.li>
          <motion.li
            className="tab13 relative text-center"
            initial="hidden"
            whileInView="visible"
            variants={item}
          >
            <Link href="#">
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
            <h3 className="md:hidden text-xl font-inter bg-[#189332] text-white text-center py-3 font-semibold">
              Webdesign for website magasine
            </h3>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Galery;
