"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  github,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const linksElement = (
    <div className="flex flex-row items-center gap-2 text-lg font-medium mt-4 mb-4">
      {link && (
        <a
          className="  bg-white p-3 text-gray-500 opacity-50 hover:opacity-100 flex items-center gap-2 rounded focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer "
          href={link}
          target="_blank"
        >
          <FaLink />
        </a>
      )}
      {github && (
        <a
          className="  bg-white p-3 text-gray-500 opacity-50 hover:opacity-100 flex items-center gap-2 rounded focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer "
          href={github}
          target="_blank"
        >
          <FaGithub />
        </a>
      )}
    </div>
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" bg-gray-100 max-w-[48rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[23rem] hover:bg-gray-200 transition sm:group-even:pl-8  ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] lg:max-w-[55%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
          {(link || github) && linksElement}

          <ul className=" flex flex-wrap mt-4 gap-2 sm:mt-auto transition">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
