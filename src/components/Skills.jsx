import React from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import { skillsData } from "@/asserts";
import { motion } from "framer-motion";
import { IconCloudComponent } from "./sub/IconCloudComponent";

const Skills = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.2,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div
      id="skills"
      className="sm:max-w-[370px]  min-h-screen flex flex-col items-center justify-center mt-28 px-4 lg:px-0"
    >
      <Heading text={"Skills"} />

      <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((item, idx) => (
          <motion.div
            custom={idx}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: "50px", once: true }}
            className="flex justify-center items-center gap-x-2 rounded-xl border border-yellow-500 bg-zinc-200 dark:bg-zinc-500 transition-colors px-4 py-2 lg:px-2"
            key={idx + item.name}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={100}
              height={100}
              className="h-auto w-[25px]"
            />
            <p className="text-gray-600 dark:text-white transition-colors">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 sm:scale-150">
        <IconCloudComponent />
      </div>
    </div>
  );
};

export default Skills;
