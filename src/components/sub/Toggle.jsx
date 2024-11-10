"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React, { useEffect, useRef, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

const Toggle = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const mainRef = useRef(null);
  const addDarkTheme = () => {
    mainRef.current.classList.add("dark");
    setDarkTheme(true);
  };
  const removeDarkTheme = () => {
    mainRef.current.classList.remove("dark");
    setDarkTheme(false);
  };

  useEffect(() => {
    const darkTheme = reactLocalStorage.get("darkTheme");
    const darkThemeParsed = darkTheme !== undefined && JSON.parse(darkTheme);
    const systemTheme =
      typeof window !== undefined &&
      window.matchMedia("(prefers-color-scheme:dark)").matches;
    if (darkTheme === undefined) {
      // console.log(setDarkTheme);
      systemTheme ? addDarkTheme() : removeDarkTheme();
    } else {
      darkThemeParsed ? addDarkTheme() : removeDarkTheme();
    }
  }, []);
  return (
    <main ref={mainRef}>
      <div className="bg-zinc-50 dark:bg-zinc-800 ">
        <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr-5 overflow-hidden">
          <span className="fixed right-16 sm:right-12 top-12 text-yellow-700 dark:text-yellow-300">
            {darkTheme ? "Light" : "Dark"}
          </span>
          <button
            onClick={() => {
              if (!darkTheme) {
                addDarkTheme();
                reactLocalStorage.set("darkTheme", true);
              } else {
                removeDarkTheme();
                reactLocalStorage.set("darkTheme", false);
              }
            }}
            className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500 z-40 dark:text-yellow-300 "
          >
            <span className="absolute block rounded-full bg-zinc-200 p-3 font-extrabold  dark:bg-zinc-600">
              {darkTheme ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>

          {children}
        </div>
      </div>
    </main>
  );
};

export default Toggle;
