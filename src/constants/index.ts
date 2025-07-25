// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  globe,
  mxsGames,
  verias,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  threejs,
  meta,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "resume",
    title: "Resume",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Solidity",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: git,
  },
  {
    name: "PostgreSQL",
    icon: docker,
  },
  {
    name: "Web3",
    icon: threejs,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company_name: "MetaXSeed Games, London, United Kingdom",
    icon: mxsGames,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2025",
    points: [
      "Architected and deployed scalable web applications using React.js, Next.js, and Node.js, delivering exceptional user experiences.",
      "Implemented serverless solutions with Firebase (NoSQL) and Supabase (PostgreSQL), optimizing backend performance and enabling real-time data synchronization.",
      "Developed and maintained RESTful APIs, ensuring seamless data exchange and integration with frontend applications.",
      "Spearheaded the development and deployment of NFT smart contracts using Solidity and Hardhat, integrating blockchain technology into web applications.",
      "Enhanced decentralized application (dApp) functionality with Web3 operations to manage NFTs and metadata reliably.",
      "Utilized Google Cloud, Jira, and Confluence to streamline project management and ensure timely delivery in an Agile environment.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Globe Telecom, Taguig",
    icon: globe,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Collaborated with cross-functional teams to ensure seamless integration of Laravel-based backend systems with frontend interfaces.",
      "Maintained and optimized Laravel-based websites, focusing on performance, scalability, and user experience.",
      "Identified and resolved bugs in Laravel controllers, ensuring robust application logic and smooth data flow between backend and frontend.",
      "Conducted thorough debugging and testing of Laravel routes, middleware, and services to improve system reliability and performance.",
      "Worked closely with frontend developers to align API endpoints with UI requirements, streamlining data exchange and reducing integration issues.",
      "Implemented and maintained Laravel migrations, models, and relationships to support efficient database operations and website functionality.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Verias, Delray Beach, Florida, USA",
    icon: verias,
    iconBg: "#E6DEDD",
    date: "December 2024 - April 2025",
    points: [
      "Developed and implemented new pages using Ext JS, enhancing user interfaces and improving application functionality for a seamless user experience.",
      "Migrated legacy Ext JS frontend sections to a modern React structure, optimizing code maintainability and performance.",
      "Integrated RESTful APIs into the frontend, enabling dynamic data retrieval and display to support real-time application features.",
      "Collaborated with backend teams to ensure seamless API integration, reducing data fetching latency and improving user responsiveness.",
      "Conducted thorough testing and debugging of frontend components, ensuring cross-browser compatibility and high-quality deliverables.",
      "Leveraged JavaScript and React best practices to streamline development workflows, contributing to faster project delivery.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "He is one of the most enthusiastic young software developers I have ever met. His learning curve is incredibly steep, and he is always open to further growth. I feel fortunate to have the opportunity to share knowledge with him.",
    name: "Efe Toker",
    designation: "Senior Software Engineer",
    company: "MXS Games",
    image: user1,
  },
  {
    testimonial:
      "He is a dedicated and industrious professional who excels at tackling complex challenges. Leveraging diverse resources, he consistently devises innovative solutions to ensure successful task completion.",
    name: "Isaias Glemao Jr.",
    company: "MXS Games",
    designation: "Full Stack Developer",
    image: user2,
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/mark-angel-rapelo-08064b2a5/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/mamaaak",
  },
] as const;

