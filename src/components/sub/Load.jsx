"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Load = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? "-100%" : 0 }}
      transition={{ duration: 0.3 }}
      className="z-50 w-full h-full fixed left-0 top-0 flex justify-center items-center bg-gradient-to-t from-yellow-50 to-red-50"
    >
      <Image src={"/spinner.gif"} alt="loading" width={60} height={80} />
    </motion.div>
  );
};

export default Load;
