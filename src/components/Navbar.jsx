"use client";
import { navbarData } from "@/asserts";
import Link from "next/link";
import React from "react";

const Navbar = ({ id }) => {
  return (
    <div className="w-[75px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 xl:py-6 z-10 shadow-xl">
      <Link href="/#home">
        <span className="text-3xl font-semibold text-red-400">SD</span>
        <span className="block w-max rotate-90 origin-bottom text-[12px] font-semibold mt-3 sm:-translate-x-4 sm:mt-6 dark:text-zinc-200 tracking-widest">
          surykant das
        </span>
      </Link>
      <div className="flex flex-col items-center gap-y-4">
        {navbarData.map((item, idx) => (
          <a
            href={`/#${item.id}`}
            key={item.name}
            className="group flex flex-col items-center gap-y-1 "
          >
            <span
              className={`text-2xl group-hover:scale-125 xl:group-hover:scale-115 xs:group-hover:scale-100 transition-all ${
                item.id === id
                  ? "text-red-500 scale-110 xl:scale-100 xs:scale-80"
                  : "text-yellow-600 scale-100 xl:scale-90 xs:scale-70"
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white ${
                idx % 2 === 0 ? "translate-x-4" : "-translate-x-4"
              }
              ${item.id === id && "-translate-x-0 opacity-100"}`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex items-center justify-center text-[10px] dark:text-zinc-200 font-semibold mt-14">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-widest dark:text-red-400">
          ©️ surya 2022-25
        </span>
      </p>
    </div>
  );
};

export default Navbar;
