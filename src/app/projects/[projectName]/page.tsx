"use client";

import Card from "@/components/fragments/card";
import { useParams } from "next/navigation";
import { projects } from "../projectsData";
import { IoMdClose } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage() {
  const { projectName } = useParams() as { projectName: string };
  const projectsData = projects.find(
    (data) => data.slug === `/projects/${projectName}`
  );

  if (!projectsData) {
    console.log("this is project data");
    console.log(projectsData);
    return (
      <Card>
        <h1>Project Not Found</h1>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-2 text-left lg:w-[900px] w-fit m-5 my-28">
      <Link
        href="/projects"
        className="fixed backdrop-blur-md top-8 p-3 bg-black-background rounded-[12px] border-[2px] border-black-border w-fit self-center cursor-pointer hover:top-7 transition-all duration-200"
      >
        <IoMdClose size={25} />
      </Link>
      <Card className="text-left p-0 mb-12">
        <div
          className={`sflex p-10 items-center justify-center bg-gradient-to-b ${projectsData.bgGradient} rounded-[12px] aspect-[16/9]`}
        >
          <Image
            src={projectsData.images[0]}
            alt={`${projectsData.title} image `}
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </Card>
      <div className="block space-y-3 mb-5 mx-0 lg:mx-28">
        <h1 className="text-[24px] font-semibold">{projectsData.title}</h1>
        <div className="grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 items-start justify-start gap-3 text-sm text-[#b3b3b3]">
          {projectsData.tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-2 py-2 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px]"
            >
              {tag.icon}
              <span>{tag.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className="block space-y-3 mb-5 mx-0 lg:mx-28">
        <h1 className="text-[24px] font-semibold">Overview</h1>
        <p className="text-[#b3b3b3] text-base">{projectsData.overview}</p>
      </div>

      {/* Solution */}
      <div className="block space-y-3 mb-5 mx-0 lg:mx-28">
        <h1 className="text-[24px] font-semibold">Solution</h1>
        <p className="text-[#b3b3b3] text-base">{projectsData.solution}</p>
      </div>

      {/* Result */}
      <div className="block space-y-3 mb-5 mx-0 lg:mx-28">
        <h1 className="text-[24px] font-semibold">Result</h1>
        <p className="text-[#b3b3b3] text-base">{projectsData.result}</p>
      </div>

      <Card className="mt-10">
        <div
          className={`flex w-full mb-5 items-center justify-center p-8 bg-gradient-to-b ${projectsData.bgGradient} rounded-[12px] aspect-[16/9]`}
        >
          <Image
            src={projectsData.images[0]}
            alt={projectsData.title}
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
        <h1 className="text-2xl font-bold">{projectsData.title}</h1>
        <p className="text-[#b3b3b3] text-base">{projectsData.description}</p>
      </Card>
    </div>
  );
}
