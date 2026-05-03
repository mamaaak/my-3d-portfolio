import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="flex min-h-[240px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-6 py-5 sm:min-h-[280px] sm:px-10 md:px-12">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mb-4 max-w-3xl text-[15px] leading-7 text-secondary sm:text-[17px] sm:leading-[30px]"
        >
          I'm a Full Stack Developer with experience working in European and US startups. I have expertise in React.js, Next.js, PHP and Node.js. 
          I specialize in creating scalable web applications and integrating blockchain
          technology using Solidity and Web3. My experience includes working with
          Firebase, Supabase, PostgreSQL, and RESTful APIs to deliver efficient,
          user-friendly solutions. I thrive in collaborative environments and adapt
          quickly to new challenges, making me a valuable asset for bringing innovative
          projects to life.
        </motion.p>

        {/* Service Card */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:mt-20 sm:justify-start sm:gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
