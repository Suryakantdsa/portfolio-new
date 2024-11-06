"use client";
import React, { useEffect, useRef, useState } from "react";
import Heading from "./sub/Heading";
import ProjectCard from "./sub/ProjectCard";
import { projectsButton, projectsData } from "@/asserts";
import { motion, animate } from "framer-motion";

const Project = () => {
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonRef = useRef([]);

  const handleClick = () => {
    animate(buttonRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonRef.current[index], { opacity: 1, scale: 1.2 });
  };
  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index]);

  return (
    <div id="project" className="min-h-screen py-20">
      <Heading text={"Project"} />
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectsButton.map((button, i) => (
          <motion.button
            className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
            key={i}
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            ref={(el) => buttonRef.current.push(el)}
            onClick={() => {
              setTech(button);
              setIndex(i);
            }}
          >
            {" "}
            {button}
          </motion.button>
        ))}
      </div>
      <div className=" flex flex-wrap items-center justify-center gap-5">
        {projectsData
          .filter((project) => {
            return project.tech.some((item) =>
              tech === "All" ? true : item === tech
            );
          })
          .map((project, i) => (
            <motion.div key={`id-${i}`} layout>
              <ProjectCard data={project} index={i} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Project;
