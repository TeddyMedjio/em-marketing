import { motion } from "framer-motion";
import Link from "next/link";

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

const Header_Offer = () => {
  return (
    <div className="backgound">
      <div className="flex items-center justify-center flex-col pt-24 px-5">
        <h1 className=" font-bold font-heading text-5xl text-white">
          We offer expertise in:
        </h1>
        <motion.ul
          className=" container flex flex-wrap max-w-[780px] gap-5 my-24"
          variants={container}
        >
          <motion.li
            className="border-t-[1px] flex-1 basis-[250px] mb-20 relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <h3
              className=" font-inter font-semibold text-white text-xl "
              variants={item}
            >
              Website Creation
            </h3>
            <p className="text-white mt-5">
              Building a captivating online platform is crucial for your
              success. Our experts specialize in crafting stunning websites that
              are not only visually appealing but also optimized for maximum
              performance. Leave a lasting impression on your visitors with a
              website that reflects your unique brand identity.
            </p>
            <Link
              target="blank"
              href="https://www.instagram.com/p/CxdZRIvt-E5/?igshid=MmU2YjMzNjRlOQ%3D%3D"
            >
              <p className="bg-[#189332] text-white rounded font-semibold py-1 px-5 mt-5  absolute animate-pulse">
                See Work
              </p>
            </Link>
          </motion.li>
          <motion.li
            className="border-t-[1px] flex-1 basis-[250px] mb-20 relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className=" font-inter font-semibold text-white text-xl">
              Graphic & 3D Design
            </h3>
            <p className="text-white mt-5">
              Leave a lasting visual impact with our exceptional graphic and 3D
              design services. From logos and branding materials to marketing
              collateral and infographics, Our skilled designers will transform
              your ideas into stunning 3D visuals, giving your brand a unique
              edge.
            </p>
            <Link
              target="blank"
              href="https://www.instagram.com/p/CxdIpiotBB2/?igshid=MmU2YjMzNjRlOQ=="
            >
              <p className="bg-[#189332] text-white rounded font-semibold py-1 px-5 mt-5  absolute animate-pulse">
                See Work
              </p>
            </Link>
          </motion.li>
          <motion.li
            className="border-t-[1px] flex-1 basis-[250px] mb-20 relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className=" font-inter font-semibold text-white text-xl">
              Social Media Page Administration
            </h3>
            <p className="text-white mt-5">
              Engage and connect with your audience on popular social media
              platforms. Our dedicated team will create and manage your social
              media pages, driving engagement, increasing brand awareness, and
              helping you stay ahead in the digital landscape.
            </p>
            <Link
              target="blank"
              href="https://www.instagram.com/p/CxD7bparphk/?igshid=MmU2YjMzNjRlOQ=="
            >
              <p className="bg-[#189332] text-white rounded font-semibold py-1 px-5 mt-5  absolute animate-pulse">
                See Work
              </p>
            </Link>
          </motion.li>
          <motion.li
            className="border-t-[1px] flex-1 basis-[250px] mb-20 relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className=" font-inter font-semibold text-white text-xl">
              Influencer Campaigns with Swiss Influencer Cyrille David
            </h3>
            <p className="text-white mt-5">
              Harness the power of influencer marketing with the incredible
              reach of Cyrille David. As an actor and singer with a dedicated
              following of 600k followers, Cyrille David will help you amplify
              your brand message and connect with your target audience on a
              personal level.
            </p>
            <Link
              target="blank"
              href="https://www.instagram.com/reel/CwkItcDMY8z/?igshid=MmU2YjMzNjRlOQ=="
            >
              <p className="bg-[#189332] text-white rounded font-semibold py-1 px-5 mt-5  absolute animate-pulse">
                See Work
              </p>
            </Link>
          </motion.li>
          <motion.li
            className="border-t-[1px] flex-1 basis-[250px] mb-20 relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className=" font-inter font-semibold text-white text-xl">
              SEO Marketing
            </h3>
            <p className="text-white mt-5">
              Boost your online visibility and drive organic traffic with our
              SEO marketing strategies. Our experts will optimize your website
              and content, ensuring you rank higher in search engine results and
              attract valuable leads.
            </p>
            <Link
              target="blank"
              href="https://www.instagram.com/em.marketing.ch/"
            >
              <p className="bg-[#189332] text-white rounded font-semibold py-1 px-5 mt-5  absolute animate-pulse">
                See Work
              </p>
            </Link>
          </motion.li>
          <motion.li
            className="border-t-[1px] flex-1 basis-[250px] mb-20"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className=" font-inter font-semibold text-white text-xl">
              Animation
            </h3>
            <p className="text-white mt-5">
              Bring your brand to life with captivating animations. Whether
              it&apos;s explainer videos, motion graphics, or animated
              advertisements, our team will deliver visually striking animations
              that communicate your message effectively.
            </p>
            <Link
              target="blank"
              href="https://www.instagram.com/reel/Cw7fKgbNd8k/?utm_source=ig_web_copy_link"
            >
              <p className="bg-[#189332] text-white rounded font-semibold py-1 px-5 mt-5  absolute animate-pulse">
                See Work
              </p>
            </Link>
          </motion.li>
          <motion.li
            className="border-t-[1px] flex-1 basis-[250px] mb-20"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className=" font-inter font-semibold text-white text-xl">
              Video Shooting & Editing
            </h3>
            <p className="text-white mt-5">
              Capture your brand&apos;s essence with high-quality video
              production. Our experienced videographers will work closely with
              you to bring your vision to life, creating compelling videos that
              engage and resonate with your target audience.
            </p>
            <Link
              target="blank"
              href="https://youtu.be/XA2-AwsPFqk?si=cpKpS-1nZSoXBH3E"
            >
              <p className="bg-[#189332] text-white rounded font-semibold py-1 px-5 mt-5  absolute animate-pulse">
                See Work
              </p>
            </Link>
          </motion.li>
          <motion.li
            className="border-t-[1px] flex-1 basis-[250px] mb-20 relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className=" font-inter font-semibold text-white text-xl">
              Event Marketing Promotions
            </h3>
            <p className="text-white mt-5">
              Make a splash with impactful event marketing promotions. Our team
              will plan, execute, and promote your events, creating buzz,
              driving attendance, and ensuring your brand stands out from the
              competition.
            </p>
            <Link
              target="blank"
              href="https://youtu.be/L37lQeX237M?si=5sG9FLBe_sqQjjAK"
            >
              <p className="bg-[#189332] text-white rounded font-semibold py-1 px-5 mt-5  absolute animate-pulse">
                See Work
              </p>
            </Link>
          </motion.li>
          <motion.div
            className="border-t-[1px] flex-1 basis-[250px] mb-20 relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className=" font-inter font-semibold text-white text-xl">
              Web & App design
            </h3>
            <p className="text-white mt-5">
              We drive deeper connections between your brand and your customers
              through human-centered design. UX and UI design.
            </p>
            <Link
              target="blank"
              href="https://www.instagram.com/p/CxdTWYTtGQ2/"
            >
              <p className="bg-[#189332] text-white rounded font-semibold py-1 px-5 mt-5  absolute animate-pulse">
                See Work
              </p>
            </Link>
          </motion.div>
          <motion.li
            className="border-t-[1px] flex-1 basis-[250px] mb-20 relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className=" font-inter font-semibold text-white text-xl">
              Company Jingle Creation
            </h3>
            <p className="text-white mt-5">
              Make your brand memorable with a unique and catchy jingle. Our
              talented team will compose an original jingle that captures the
              essence of your brand, leaving a lasting impression on your
              audience.
            </p>
            <Link target="blank" href="https://soundcloud.app.goo.gl/xcvSt">
              <p className="bg-[#189332] text-white rounded font-semibold py-1 px-5 mt-5  absolute animate-pulse">
                See Work
              </p>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Header_Offer;
