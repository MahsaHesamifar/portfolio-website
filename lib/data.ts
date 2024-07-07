import adminisImg from "@/public/adminis.png";
import image from "@/public/avatar.png";
import divar from "@/public/divar.png";
import farhangiImg from "@/public/farhangi.png";
import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbBrandNextjs } from "react-icons/tb";

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
      "I'm Front-end developer working as a freelancer. My stack includes React, Tailwind, Material UI and Redux.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Next.js Intern at EazyHoosh Company",
    location: "Qazvin",
    description:
      "Currently learning and working with Next.js App Router, TypeScript, RTK Query, Tailwind CSS, Next UI, and React Hook Form.",
    icon: React.createElement(TbBrandNextjs),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Divar Clone App",
    description:
      "This is a clone of the Divar site, replicating its core functionalities including advertisement listings and user interactions, built with modern web technologies.",
    tags: [
      "Next Js",
      "RTK Query",
      "Typescript",
      "Tailwind CSS",
      "Middleware",
      "React Hook Form",
      "Custom Hooks",
    ],
    imageUrl: divar,
    link: "https://divar-clone-app.liara.run/",
    github: "https://github.com/MahsaHesamifar/divar-clone-app",
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
];

export const skillsData = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Custom Hooks",
  "Middleware",
  "Material UI",
  "NextUI",
  "Redux",
  "Redux Toolkit",
  "Context API",
  "RTK Query",
  "Axios",
  "SASS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Responsive Design",
  "Framer Motion",
  // "Three.js",
  "Adobe XD",
  "Adobe Illustrator",
  "Figma",
  "React Hook Form",
  "Formik",
  "Clean code principles",
] as const;
