import { Project } from "@/types/projectCard.type";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.slug} className="items-start text-left">
      <div className="flex mb-5 items-center justify-center p-8 bg-gradient-to-b from-blue-background via-blue-background to-[#a3d5ff] rounded-[12px] aspect-square">
        {project.images.map((image, index) => (
          <Image
            key={index} 
            src={image}
            alt={`${project.title} image ${index + 1}`}
            width={1000}
            height={1000}
            className="w-full"
          />
        ))}
      </div>
      <h1 className="text-xl font-bold mb">{project.title}</h1>
      <p className="my-3">{project.description}</p>
      <div className="grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 items-start justify-start gap-3 text-sm mt-5 text-[#b3b3b3]">
        {project.tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-2 py-2 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px]"
          >
            {tag.icon}
            <span>{tag.label}</span>
          </div>
        ))}
      </div>
    </Link>
  );
}
