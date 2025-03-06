"use client";

import Card from "@/components/fragments/card";
import { useParams } from "next/navigation";
import { projects } from "../projectsData";
import Image from "next/image";

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
    <div className="flex flex-col gap-2 lg:w-[600px] w-fit m-5 mb-28">
      <Card className="text-left">
        <div className="flex mb-5 items-center justify-center p-8 bg-gradient-to-b from-blue-background via-blue-background to-[#a3d5ff] rounded-[12px] aspect-square">
          <Image
            src={projectsData.images[0]}
            alt={`${projectsData.title} image `}
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
        <h1 className="text-xl font-bold mb">{projectsData.title}</h1>
        <p className="my-3">{projectsData.description}</p>
        <div className="grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 items-start justify-start gap-3 text-sm mt-5 text-[#b3b3b3]">
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
      </Card>
      <p className="text-left p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium repellat nam reprehenderit ad? Quo amet ipsa atque quidem
        sit tenetur possimus vitae asperiores nobis necessitatibus eum qui
        placeat animi, tempore eius id fugit facilis accusamus reiciendis
        voluptates eveniet error. Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit. Debitis cumque quae iure quo commodi voluptatibus
        libero consequuntur quisquam atque! Ratione est laudantium officia
        deserunt porro ut amet odit adipisci deleniti eveniet magni sunt at
        veritatis provident inventore hic commodi consequuntur possimus et,
        perspiciatis culpa fuga dolore quia sequi? Distinctio eveniet odio,
        labore quia numquam ea possimus laudantium earum consequuntur maxime.{" "}
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium repellat nam reprehenderit ad? Quo amet ipsa atque quidem
        sit tenetur possimus vitae asperiores nobis necessitatibus eum qui
        placeat animi, tempore eius id fugit facilis accusamus reiciendis
        voluptates eveniet error. Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit. Debitis cumque quae iure quo commodi voluptatibus
        libero consequuntur quisquam atque! Ratione est laudantium officia
        deserunt porro ut amet odit adipisci deleniti eveniet magni sunt at
        veritatis provident inventore hic commodi consequuntur possimus et,
        perspiciatis culpa fuga dolore quia sequi? Distinctio eveniet odio,
        labore quia numquam ea possimus laudantium earum consequuntur maxime.
      </p>
      <Card className="text-left">
        <div className="flex w-full mb-5 items-center justify-center p-8 bg-gradient-to-b from-blue-background via-blue-background to-[#a3d5ff] rounded-[12px] aspect-square">
          <Image
            src={projectsData.images[0]}
            alt={projectsData.title}
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
        <h1 className="text-2xl font-bold">{projectsData.title}</h1>
        <p>{projectsData.description}</p>
      </Card>
    </div>
  );
}
