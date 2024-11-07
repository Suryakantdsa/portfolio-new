"use client";
import React from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import Achievements from "./sub/Achievements";
import { downloadIcon, aboutData, stats } from "@/asserts";
import { TypeAnimation } from "react-type-animation";
import ShimmerButton from "./ui/shimmer-button";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";
import { StatCard } from "./sub/StatsCard";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <Heading text={"About me"} />
      <div className="w-full flex items-center justify-between md:justify-center  ">
        <Image
          src={"/about-me.png"}
          alt="About me"
          width={600}
          height={400}
          className="w-[250px] h-[250px] lg:w-[200px] md:hidden"
        />
        <div className=" relative sm:max-w-[800px] rounded-xl bg-zinc-200 p-5 text-justify dark:bg-zinc-700 transition-colors shadow-lg">
          <span className=" absolute -left-5 top-20 scale-[2.5] text-zinc-300 dark:text-zinc-700 transition-colors md:hidden">
            <ArrowLeftSFillIcon />{" "}
          </span>
          <div className=" text-base font-normal text-gray-800 dark:text-white transition-colors  lg:text-[16px] sm:text-[14px] ">
            <p>
              I&apos;m Suryakant Das, a
              <span className="font-bold">
                {"    "}
                <TypeAnimation
                  sequence={[
                    "full-stack developer",
                    500,
                    "MERN stack developer",
                    500,
                    "ReactJs developer",
                    500,
                    "web developer",
                    500,
                    "NodeJS developer",
                    500,
                    "Backend developer",
                    500,
                    "Frontend developer",
                    500,
                  ]}
                  style={{
                    fontSize: "1.4em",
                    background:
                      "linear-gradient(90deg, #ff7e5f, #feb47b, #86a8e7, #91eac9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    borderRight: "3px solid black",
                    borderColor: "#eab308",
                    paddingRight: "2px",
                    animation: "blinkCursor 1s step-end infinite",
                  }}
                  repeat={Infinity}
                />{" "}
              </span>
              <br />
              <br />
            </p>
            with a passion for building responsive, user-friendly web
            applications. Skilled in JavaScript, TypeScript, and Python, and
            proficient with ReactJS, NodeJS, ExpressJS, NextJS, and Tailwind
            CSS, I bring both functionality and aesthetics to every project.
            <br />
            <br />
            With experience in MongoDB and SQL databases, and tools like Git,
            Postman, and Figma, I develop solutions that are as efficient as
            they are visually appealing. My focus is on crafting seamless user
            experiences and robust APIs, blending both technical and creative
            expertise to deliver exceptional results.
          </div>
          <ShimmerButton
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1d7IljN3Pe9tGm9ek0oSx9opM59YFW_9Q/view?usp=drivesdk",
                "_blank"
              )
            }
            background={"#ef4444"}
            shimmerSize={"0.2em"}
            className=" shadow-2xl  mt-6 rounded-full  text-white px-3 py-2 font-light hover:scale-[1.05] transition-transform"
          >
            <a className="w-max flex items-center gap-x-2 text-white">
              <span>Download CV</span>
              <span>{downloadIcon}</span>
            </a>
          </ShimmerButton>
        </div>
      </div>
      <div className="w-full mt-16 grid  xs:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-6 border p-4 shadow-xl rounded-xl dark:bg-zinc-700 bg-white transition-colors">
        {stats.map((stat, idx) => (
          // <Achievements
          //   title={item.title}
          //   amount={item.amount}
          //   icon={item.icon}
          //   key={idx}
          // />

          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default About;
