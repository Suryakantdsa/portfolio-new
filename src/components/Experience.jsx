"use client";
import React, { useRef } from "react";
import Heading from "./sub/Heading";
import { experienceData } from "@/asserts";
import Image from "next/image";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";
import { motion, useScroll, useSpring } from "framer-motion";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  // Add spring physics for smoother animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div id="experience" className=" relative mt-32">
      <Heading text={"Experience & Education"} />
      <Image
        src="/education.png"
        alt={"Experience Image"}
        width={400}
        height={400}
        className="absolute -top-4 right-0 opacity-70 lg:hidden"
      />

      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center gap-y-10 1g:gap-y-20 py-10"
      >
        {experienceData.map((data, idx) => (
          <div
            key={idx}
            className={` xl:w-[480px] sm:w-full px-12 sm:px-0 relative -left-[300px]  z-50 ${
              idx % 2 === 0
                ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                : "left-[300px] xl:left-[240px] lg:left-0"
            }
            
           `}
          >
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
              className="relative flex flex-col gap-y-3 border border-red-300 bg-white dark:bg-zinc-700 transition-colors p-4 tracking-wide sm:text-sm shadow-xl rounded-md "
            >
              <h1 className="font-light text-2xl sm:text-xl text-gray-700 dark:text-white transition-colors  ">
                {data.title}
              </h1>
              <p className="text-gray-800 dark:text-white transition-colors ">
                <span className="block font-light">
                  {data.company || "Education"}
                </span>
                <span className="block pl-2 font-extralight">
                  {data.education}
                </span>
              </p>
              <div className="text-gray-800 dark:text-white transition-colors ">
                <span className="font-light">Experience</span>
                <ul className="pl-2">
                  {data.experience.map((exp, i) => (
                    <li key={i} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 scale-[2] lg:hidden ${
                  idx % 2 === 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                <ArrowLeftSFillIcon />
              </span>
            </motion.div>
            <div
              className={` w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-500 font-light -translate-y-1/2 bg-white -z-10  ${
                idx % 2 === 0
                  ? "left-full -translate-x-1/2 lg:left-1/2"
                  : "right-full     translate-x-1/2 lg:right-1/2"
              }`}
            >
              {data.year}
            </div>
          </div>
        ))}
        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scaleY }}
          className="w-1 h-full absolute rounded-full bg-gray-300 origin-top  "
        ></motion.div>
      </div>
    </div>
  );
};

export default Experience;
