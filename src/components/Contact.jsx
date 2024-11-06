import React from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="h-screen lg:h-auto lg:py-40 py-20 xs:pb-20">
      <Heading text={"Get in Touch"} />
      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact1.gif"}
            alt="contact"
            width={400}
            height={400}
            className=" w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          action=""
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-4">
            <input
              type="text"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 dark:bg-zinc-700 transition-colors px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your name"
            />
            <input
              type="email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 dark:bg-zinc-700 transition-colors px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your email"
            />
          </div>
          <input
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 dark:bg-zinc-700 transition-colors px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
          />
          <textarea
            name=""
            id=""
            className="max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-100 dark:bg-zinc-700 transition-colors px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write me.."
          ></textarea>
          <button className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light hover:bg-yellow-500 transition-colors cursor-pointer tracking-wider text-white outline-none">
            Send message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
