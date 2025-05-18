"use client";

import Card from "@/components/fragments/card";
import React, { useState } from "react";
import { DiMysql } from "react-icons/di";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiAndroid,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiPython,
} from "react-icons/si";

type CustomCSSProperties = React.CSSProperties & {
  "--width"?: string;
  "--height"?: string;
  "--quantity"?: number;
  "--duration"?: string;
};

export default function TechStackSlider() {
  const techIcons = [
    { icon: <SiReact className="w-8 h-8" />, name: "React", hover: "#61DAFB" },
    { icon: <SiHtml5 className="w-8 h-8" />, name: "HTML5", hover: "#E34F26" },
    { icon: <SiCss3 className="w-8 h-8" />, name: "CSS3", hover: "#1572B6" },
    {
      icon: <SiTailwindcss className="w-8 h-8" />,
      name: "Tailwind CSS",
      hover: "#38B2AC",
    },
    {
      icon: <SiNextdotjs className="w-8 h-8" />,
      name: "Next.js",
      hover: "#000000",
    },
    {
      icon: <SiAndroid className="w-8 h-8" />,
      name: "Android",
      hover: "#3DDC84",
    },
    {
      icon: <SiReact className="w-8 h-8" />,
      name: "React Native",
      hover: "#61DAFB",
    },
    { icon: <DiMysql className="w-8 h-8" />, name: "MySQL", hover: "#3776AB" },
    {
      icon: <SiJavascript className="w-8 h-8" />,
      name: "JavaScript",
      hover: "#F7DF1E",
    },
    {
      icon: <SiTypescript className="w-8 h-8" />,
      name: "TypeScript",
      hover: "#3178C6",
    },
    {
      icon: <SiNodedotjs className="w-8 h-8" />,
      name: "Node.js",
      hover: "#339933",
    },
    { icon: <SiGit className="w-8 h-8" />, name: "Git", hover: "#F05032" },
    { icon: <SiFigma className="w-8 h-8" />, name: "Figma", hover: "#F24E1E" },
    {
      icon: <SiPython className="w-8 h-8" />,
      name: "Python",
      hover: "#3776AB",
    },
  ];

  const quantity = techIcons.length;
  const width = 80;
  const height = 80;

  // Simpan index item yang sedang di-hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Card className="text-left p-6">
      <h1 className="mb-4 text-2xl font-semibold">Tech Stack</h1>
      <div
        className="slider mask-image my-8"
        style={
          {
            "--width": `${width}px`,
            "--height": `${height}px`,
            "--quantity": quantity,
            "--duration": "30s",
          } as CustomCSSProperties
        }
      >
        <div className="list">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="flex-none w-16 h-16 mx-4 rounded-[12px] cursor-pointer border border-black-border shadow-lg flex items-center justify-center text-white transition-all duration-300"
                style={{
                  backgroundColor:
                    hoveredIndex === index ? tech.hover : "transparent",
                }}
              >
                {tech.icon}
              </div>
            </div>
          ))}
          {/* Duplikat item untuk efek infinite looping */}
          {techIcons.map((tech, index) => (
            <div
              key={`duplicate-${index}`}
              className="item"
              onMouseEnter={() => setHoveredIndex(index + quantity)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="flex-none w-16 h-16 mx-4 rounded-[12px] cursor-pointer border border-black-border shadow-lg flex items-center justify-center text-white transition-all duration-300"
                style={{
                  backgroundColor:
                    hoveredIndex === index + quantity
                      ? tech.hover
                      : "transparent",
                }}
              >
                {tech.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
