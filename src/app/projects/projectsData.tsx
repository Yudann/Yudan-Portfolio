import { Project } from "@/types/projectCard.type";
import { FaAndroid, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";

export const projects: Project[] = [
  {
    id: 1,
    title: "Tensi Edu",
    slug: "/projects/tensi-edu",
    description: "Develop Tensi Edu App as a frontend mobile developer",
    images: ["/projects/tensi-edu-7.png"],
    tags: [
      { icon: <FaReact />, label: "React Native" },
      { icon: <FaAndroid />, label: "Mobile App" },
    ],
  },
  {
    id: 2,
    title: "Tracker Str",
    slug: "/projects/tracker-str",
    description: "Description for Project 2",
    images: ["/projects/tracker-str-7.png"],
    tags: [
      { icon: <SlGlobe />, label: "Web App" },
      { icon: <SiNextdotjs />, label: "Next JS" },
      { icon: <RiTailwindCssFill />, label: "Tailwind" },
    ],
  },
  {
    id: 3,
    title: "Riors E-Commerce Website",
    slug: "/projects/riors",
    description: "Description for Project 3",
    images: ["/projects/riors-7.png"],
    tags: [
      { icon: <SlGlobe />, label: "E-Commerce" },
      { icon: <SiNextdotjs />, label: "Next JS" },
      { icon: <RiTailwindCssFill />, label: "Tailwind" },
    ],
  },
];
