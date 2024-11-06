"use client";
import { Suspense } from "react";
import IconCloud from "../ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  // "dart",
  // "java",
  "react",
  // "flutter",
  // "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  // "sonarqube",
  "figma",
];

export function IconCloudComponent() {
  return (
    <div className="flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-800 transition-colors px-20 ">
      <Suspense fallback={<div>Loading...</div>}>
        <IconCloud iconSlugs={slugs} />
      </Suspense>
    </div>
  );
}
