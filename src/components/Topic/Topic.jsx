import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.6,
    },
  },
};

const item = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Topic = () => {
  return (
    <div className="bg-[#E7ECF2]">
      <motion.div
        className="mx-auto container px-5 lg:px-0 max-w-5xl py-40"
        variants={container}
      >
        <h1 className="font-bold uppercase text-6xl py-20">about</h1>
        <motion.p
          className="font-medium text-justify text-xl"
          variants={item}
          initial="hidden"
          whileInView="visible"
        >
          Welcome to E-Marketing, a first marketing firm nestled in the heart of
          Switzerland. E-Marketing, founded by{" "}
          <span className="text-[#189332] font-bold">
            Cyrille David, a Swiss influencer with an impressive following of
            over 600,000
          </span>{" "}
          people, is more than just your average marketing agency. Here, we
          believe in the power of emotional marketing. We believe that people
          may forget what you did, but they will never forget how you made them
          feel. This is the core ethos that guides our every strategy, our every
          campaign.
        </motion.p>{" "}
        <br /> <br />{" "}
        <motion.p
          className="font-medium text-justify text-xl"
          variants={item}
          initial="hidden"
          whileInView="visible"
        >
          At E-Marketing, we recognize that effective marketing is about
          creating meaningful connections, powerful memories, and lasting
          impressions. It&apos;s about leaving an indelible mark in the hearts
          and minds of your audience. We don&apos;t just sell your product or
          service; we tell your story in a captivating way that resonates with
          your target market, making your brand unforgettable.
        </motion.p>
        <br /> <br />{" "}
        <motion.p
          className="font-medium text-justify text-xl"
          variants={item}
          initial="hidden"
          whileInView="visible"
        >
          {" "}
          broad range of interconnected services are designed with one goal in
          mind:{" "}
          <span className="text-[#189332] font-bold">
            to make you stand out in the crowded digital landscape.
          </span>{" "}
          Leveraging the latest digital marketing trends and technologies,{" "}
          <span className="text-[#189332] font-bold">
            we offer innovative solutions that drive engagement, boost
            visibility, and propel your business to new heights.
          </span>
          <br />
          <br />
        </motion.p>
        <motion.p
          className="font-medium text-justify text-xl"
          variants={item}
          initial="hidden"
          whileInView="visible"
        >
          <span className="text-[#189332] font-bold">
            From strategic planning and creative content creation to social
            media management and SEO optimization,
          </span>{" "}
          our team of experts work hand in hand to deliver a cohesive,
          effective, and impactful marketing strategy tailored to your specific
          needs. Join us on this exciting journey, and let&apos;s together
          create long-lasting, impactful memories that will take your brand to
          the next level. Trust E-Marketing – where emotions meet marketing.{" "}
          <br /> <br />
          <span className="text-black font-bold">
            Welcome to the future of marketing. Welcome to E-Marketing.
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Topic;
