"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const ProjectCard = ({ data, index }) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => {
        setShow((show) => !show);
      }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="relative  max-w-[250px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer"
    >
      <Image
        src={data.imageurl}
        alt="projectimage "
        width={400}
        height={400}
        className="rounded-lg opacity-70"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg  dark:bg-zinc-700/95 transition-colors "
      >
        <h2 className="text-lg font-bold tracking-wide text-gray-500  dark:text-white transition-colors">
          {data.name}
        </h2>
        <p className="text-justify text-gray-500  dark:text-gray-100 transition-colors first-letter:pl2">
          {data.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
