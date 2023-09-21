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
            <Link
              href="https://www.instagram.com/p/CxdTWYTtGQ2/?igshid=MmU2YjMzNjRlOQ=="
              variants={item}
            >
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
            <Link
              href="https://www.instagram.com/p/CxdIpiotBB2/?igshid=MmU2YjMzNjRlOQ=="
              variants={item}
            >
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
            <Link
              href="https://www.instagram.com/p/CxD7bparphk/?igshid=MmU2YjMzNjRlOQ=="
              variants={item}
            >
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
            <Link
              href="https://www.instagram.com/reel/CwkItcDMY8z/?igshid=MmU2YjMzNjRlOQ=="
              variants={item}
            >
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
            <Link
              href="https://www.instagram.com/em.marketing.ch/"
              variants={item}
            >
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
            <Link
              href="https://www.instagram.com/reel/Cw7fKgbNd8k/?utm_source=ig_web_copy_link"
              variants={item}
            >
              <span className=" font-inter text-white text-xl">Animation</span>
            </Link>
          </motion.li>
          <motion.li
            className="item border-t-[1px] flex-1 basis-[250px] mb-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <Link
              href="https://youtu.be/XA2-AwsPFqk?si=cpKpS-1nZSoXBH3E"
              variants={item}
            >
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
            <Link
              href="https://youtu.be/L37lQeX237M?si=5sG9FLBe_sqQjjAK"
              variants={item}
            >
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
            <Link
              href="https://www.instagram.com/p/CxdTWYTtGQ2/?igshid=MmU2YjMzNjRlOQ=="
              variants={item}
            >
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
            <Link href="https://soundcloud.app.goo.gl/xcvSt" variants={item}>
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
