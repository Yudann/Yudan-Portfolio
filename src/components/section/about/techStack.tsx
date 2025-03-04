// components/TechStackSlider.js
import Card from "@/components/fragments/card";
import React from "react";
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
} from "react-icons/si";

// Tipe khusus untuk CSS custom properties
type CustomCSSProperties = React.CSSProperties & {
  "--width"?: string;
  "--height"?: string;
  "--quantity"?: number;
  "--duration"?: string; // Tambahkan variabel --duration
};

export default function TechStackSlider() {
  const techIcons = [
    { icon: <SiReact className="w-8 h-8" />, name: "React" },
    { icon: <SiHtml5 className="w-8 h-8" />, name: "HTML5" },
    { icon: <SiCss3 className="w-8 h-8" />, name: "CSS3" },
    { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js" },
    { icon: <SiAndroid className="w-8 h-8" />, name: "Android" },
    { icon: <SiJavascript className="w-8 h-8" />, name: "JavaScript" },
    { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript" },
    { icon: <SiNodedotjs className="w-8 h-8" />, name: "Node.js" },
    { icon: <SiGit className="w-8 h-8" />, name: "Git" },
    { icon: <SiFigma className="w-8 h-8" />, name: "Figma" },
  ];

  const quantity = techIcons.length;
  const width = 100; // Width of each item in pixels
  const height = 100; // Height of each item in pixels

  return (
    <Card className="text-left p-6">
      <h1 className="mb-4 text-2xl font-semibold">Tech Stack</h1>
      <div
        className="slider mask-image my-10"
        style={
          {
            "--width": `${width}px`,
            "--height": `${height}px`,
            "--quantity": quantity,
            "--duration": "30s", // Atur durasi animasi di sini
          } as CustomCSSProperties
        }
      >
        <div className="list">
          {techIcons.map((tech, index) => (
            <div key={index} className="item">
              <div className="flex-none w-20 h-20 mx-4 rounded-[12px] border border-black-border shadow-lg flex items-center justify-center text-white">
                {tech.icon}
              </div>
            </div>
          ))}
          {/* Duplikat item untuk efek infinite looping */}
          {techIcons.map((tech, index) => (
            <div key={`duplicate-${index}`} className="item">
              <div className="flex-none w-20 h-20 mx-4 rounded-[12px] border border-black-border shadow-lg flex items-center justify-center text-white">
                {tech.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
