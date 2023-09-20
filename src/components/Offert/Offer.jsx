import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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

        <motion.ul
          className=" container flex flex-wrap max-w-[780px] gap-5 my-24"
          variants={container}
        >
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link href="https://notary-virid.vercel.app/" variants={item}>
              <span className=" font-inter text-white text-xl ">
                Website Creation
              </span>
            </Link>
          </motion.li>
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link href="/services" variants={item}>
              <span className=" font-inter text-white text-xl">
                Graphic & 3D Design
              </span>
            </Link>
          </motion.li>
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link href="/services" variants={item}>
              <span className=" font-inter text-white text-xl">
                Social Media Page Administration
              </span>
            </Link>
          </motion.li>
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link href="/services" variants={item}>
              <span className=" font-inter text-white text-xl">
                Influencer Campaigns with Swiss Influencer Cyrille David
              </span>
            </Link>
          </motion.li>
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link href="/services" variants={item}>
              <span className=" font-inter text-white text-xl">
                SEO Marketing
              </span>
            </Link>
          </motion.li>
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link href="/services" variants={item}>
              <span className=" font-inter text-white text-xl">Animation</span>
            </Link>
          </motion.li>
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link href="/services" variants={item}>
              <span className=" font-inter text-white text-xl">
                Video Shooting & Editing
              </span>
            </Link>
          </motion.li>
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link href="/services" variants={item}>
              <span className=" font-inter text-white text-xl">
                Event Marketing Promotions
              </span>
            </Link>
          </motion.li>
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link href="/services" variants={item}>
              <span className=" font-inter text-white text-xl">
                Web & App design
              </span>
            </Link>
          </motion.li>
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link href="/services" variants={item}>
              <span className=" font-inter text-white text-xl">
                Company Jingle Creation
              </span>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Offer;
