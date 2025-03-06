import Card from "@/components/fragments/card";

import { SlGlobe } from "react-icons/sl";
import ProjectCard from "@/components/section/project/projectCard";
import { projects } from "./projectsData";

export default function ProjectsPage() {
  return (
    <div className="p-5 mb-28 mx-0 lg:mx-0 md:mx-0 xl:mx-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="p-6 md:hover:rotate-2 transition-all duration-300"
          >
            <ProjectCard project={project} />
          </Card>
        ))}
        <Card className="text-left md:hover:rotate-2 transition-all duration-300">
          <div className="flex mb-5 items-end justify-center bg-gradient-to-t from-purple-background via-purple-background to-[#c39eff] rounded-[12px] aspect-square overflow-hidden">
            <video
              src="/projects/appleWeb.mp4"
              className="w-[120%] h-[60%]  object-cover"
              autoPlay
              muted
              loop
            />
          </div>
          <h1 className="text-xl font-bold mb">Cloning Iphone Website</h1>
          <p className="my-3">Just Cloning an apple website for my exercise</p>
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
