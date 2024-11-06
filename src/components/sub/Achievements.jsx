"use client";
import { useMotionValue, motion, animate, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Achievements = ({ title, amount, icon }) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, amount, {
        duration: 2,
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });

      return animation.stop;
    }
  }, [count, isInView, amount]);

  return (
    <div ref={ref} className="flex items-end gap-x-3 ">
      <span className="text-4xl lg:text-2xl text-gray-400 ">{icon}</span>
      <h1 className="flex flex-col gap-y-2">
        <motion.span className="text-2xl lg:text-xl font-light text-yellow-500">
          {displayValue}
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
          {title}
        </span>
      </h1>
    </div>
  );
};

export default Achievements;
