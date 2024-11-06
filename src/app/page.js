"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Load from "@/components/sub/Load";
import Toggle from "@/components/sub/Toggle";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const componentRef = useRef(null);
  const [activeId, setActiveId] = useState("hero"); // Give it a default value

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Changed from intersecting to isIntersecting
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const componentArr = Array.from(componentRef.current.children);
    componentArr.forEach((component) => {
      observer.observe(component);
    });

    // Cleanup observer
    return () => {
      componentArr.forEach((component) => {
        observer.unobserve(component);
      });
    };
  }, []);

  return (
    <>
      <Load />
      <Toggle>
        <Navbar id={activeId} />
        <div className="sm:max-w-[300px]" ref={componentRef}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Project />
          <Contact />
        </div>
      </Toggle>
    </>
  );
}
