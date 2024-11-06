"use client";
import { HeroIcons } from "@/asserts";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  useMotionValue,
  useTransform,
  motion,
  useSpring,
  delay,
} from "framer-motion";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, SetMouseMove] = useState(false);
  const [buttonHover, SetButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    SetMouseMove(true);
    // console.log(innerHeight, innerWidth);
  };
  const { innerHeight, innerWidth } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateX = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateY = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center font-light capitalize"
        >
          <motion.div
            className="flex items-center justify-center "
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src="/person3.gif"
              alt="My Avatar"
              width={400} // Set default width for the Image component
              height={400} // Set default height for the Image component
              priority={true}
              className="sm:w-[800px] w-[600px] -mt-20"
              style={{ maxWidth: "300%", height: "auto" }} // Direct style adjustment
            />

            <motion.span
              className="absolute text-xl font-semibold text-blue-600"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Namaste..🙏
            </motion.span>
          </motion.div>

          <h1 className="-mt-20 text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-lg  md:text-xl dark:text-white transition-colors">
            My name is Suryakant Das &
          </h1>
          <p className="text-gray-600 dark:text-zinc-500 text-xs font-semibold text-center pt-2 transition-colors">
            I make the internet do cool tricks 🤹‍♂️ – from front 🎨 to back 💻!
          </p>
          <div className=" flex mt-4 justify-center text-3xl gap-x-5 text-yellow-600">
            {HeroIcons.map((icon, i) => (
              <Link
                href="/"
                key={i}
                className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
              >
                {icon}
              </Link>
            ))}
          </div>
          <motion.a
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            href={"/"}
            className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
            onMouseEnter={() => SetButtonHover(true)}
            onMouseLeave={() => SetButtonHover(false)}
          >
            Talk to me
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
