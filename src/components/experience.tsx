import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

// Experience Card
const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      maxWidth: "min(100%, calc(100vw - 3rem))",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="h-[55%] w-[55%] object-contain sm:h-[60%] sm:w-[60%]"
        />
      </div>
    }
  >
    {/* Title */}
    <div>
      <h3 className="text-lg font-bold text-white sm:text-[22px] md:text-[24px]">
        {experience.title}
      </h3>
      <p
        className="text-sm font-semibold text-secondary sm:text-[15px] md:text-[16px] break-words"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    {/* Experience Points */}
    <ul className="ml-4 mt-4 list-disc space-y-2 pl-1 sm:ml-5 sm:mt-5">
      {experience.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className="text-white-100 pl-0.5 text-[13px] tracking-wide sm:text-[14px] break-words"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Experience
export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        {/* Experience Card */}
        <div className="experience-timeline-wrapper mt-6 flex w-full max-w-full flex-col sm:mt-8">
          <VerticalTimeline className="mt-0">
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
