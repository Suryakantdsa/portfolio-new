"use client";
import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="text-3xl sm:text-2xl font-bold text-gray-600 dark:text-white transition-colors mb-10 self-start">
      {text}
    </div>
  );
};

export default Heading;
