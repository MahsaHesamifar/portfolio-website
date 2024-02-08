import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import image from "@/public/avatar.png";
import farhangiImg from "@/public/farhangi.png";
import adminisImg from "@/public/adminis.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
// we used as const because these won't change and we want to be more percise

export const profileInfo = {
  image: image,
};

export const experiencesData = [
  {
    title: "Highschool Diploma",
    location:
      "National Organization for Development of Exceptional Talents (NODET)",
    description: "Field of Study: Mathematics",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Bachelor: Computer Engineering",
    location: "Imam Khomeini International University (IKIU)",
    description: "Field of study: Software Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Front-end Developer (React)",
    location: "Qazvin",
    description:
      "I'm now a Front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Material UI and Redux. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "University's Cultural Department Website",
    description:
      "I worked as a front-end developer on this startup project with my team.",
    tags: [
      "React",
      "Material UI",
      "Complex forms with Formik",
      "Yup",
      "Axios",
      "Responsive Design",
    ],
    imageUrl: farhangiImg,
    link: "http://farhangi.ikiu.ac.ir/",
    github: "",
  },
  {
    title: "ADMINIS",
    description:
      "React Admin Dashboard. This application consists of light and dark mode.",
    tags: [
      "React",
      "Material UI",
      "Formik",
      "Yup",
      "React pro sidebar",
      "Full calendar",
      "Nivo charts",
      "Theme Switching",
      "Data Grid",
    ],
    imageUrl: adminisImg,
    link: "https://react-admin-gep5eo7wm-mahsas-projects-d06496ac.vercel.app",
    github: "https://github.com/MahsaHesamifar/react-admin-panel",
  },
];

export const skillsData = [
  "React",
  "Material UI",
  "Redux",
  "Next.js",
  "Restful API",
  "SASS",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "GitHub",
  "Responsive Design",
  "Custom Hooks",
  "Context API",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  // "Three.js",
  "Adobe XD",
  "Adobe Illustrator",
  "Figma",
] as const;
