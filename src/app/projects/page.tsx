// pages/projects.tsx
import Card from "@/components/fragments/card";
import { FaAndroid, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import { SlGlobe } from "react-icons/sl";
import ProjectCard from "@/components/section/project/projectCard";
import { Project } from "@/types/projectCard.type";

const projects: Project[] = [
  {
    title: "Tensi Edu",
    description: "Develop Tensi Edu App as a frontend mobile developer",
    images: ["/projects/tensi-edu-7.png"],
    tags: [
      { icon: <FaReact />, label: "React Native" },
      { icon: <FaAndroid />, label: "Mobile App" },
    ],
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    images: ["/projects/tracker-str-7.png"],
    tags: [
      { icon: <SlGlobe />, label: "Web App" },
      { icon: <SiNextdotjs />, label: "Next JS" },
      { icon: <RiTailwindCssFill />, label: "Tailwind" },
    ],
  },
  {
    title: "Project 3",
    description: "Description for Project 3",
    images: ["/projects/riors-7.png"],
    tags: [
      { icon: <SlGlobe />, label: "E-Commerce" },
      { icon: <SiNextdotjs />, label: "Next JS" },
      { icon: <RiTailwindCssFill />, label: "Tailwind" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-5 mb-28 mx-0 lg:mx-0 md:mx-0 xl:mx-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="p-6 md:hover:rotate-2 transition-all duration-300"
          >
            <ProjectCard project={project} />
          </Card>
        ))}
        <Card className="text-left">
          <div className="flex mb-5 items-end justify-center bg-gradient-to-t from-purple-background via-purple-background to-[#c39eff] rounded-[12px] aspect-square overflow-hidden">
            <video
              src="/projects/appleWeb.mp4"
              className="w-[120%] h-[60%]  object-cover"
              autoPlay
              muted
              loop
            />
          </div>
          <h1 className="text-xl font-bold mb">Apple Website</h1>
          <p className="my-3">Making Apple Website</p>
          <div className="flex items-start justify-start gap-3 text-sm mt-5 text-[#b3b3b3]">
            <div className="flex items-center gap-2 py-2 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px]">
              <SlGlobe />
              <span>Website</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
