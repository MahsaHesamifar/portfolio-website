"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate front-end developer with a strong aptitude for
        problem-solving. I <span className="underline">love</span> the feeling
        of finally figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Material UI, HTML, Css and JavaScript
        </span>
        . I am also familiar with Next.js and TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy drawing and
        watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">UI/UX Design</span>. I'm
        also learning how to play the piano.
      </p>
    </motion.section>
  );
}
