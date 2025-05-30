"use client";

import Card from "@/components/fragments/card";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";

export default function ProfileCard() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="items-start text-left">
      {/* Image with Skeleton Loading */}
      <div className="flex mb-5 items-center justify-center aspect-square relative">
        {!imageLoaded && (
          <div className="absolute inset-0 w-full h-full rounded-[12px] bg-gray-700 animate-pulse"></div>
        )}
        <Image
          src="/yudan-about.jpeg"
          alt="yudan about"
          width={1000}
          height={1000}
          className={`w-full rounded-[12px] lg:grayscale hover:grayscale-0 transition-all duration-200 ${
            !imageLoaded ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>

      <h1 className="mb-4 text-2xl font-bold">Hey again 👋</h1>
      <p className="text-base font-normal">
        I`m Yudan, a Front-End Developer who thrives on building smooth,
        engaging, and efficient digital experiences. With a strong focus on
        Next.js, Tailwind CSS, and React Native, I love transforming ideas into
        intuitive and high-performance applications. Currently, I`m diving
        deeper into modern web technologies while constantly refining my craft.
        Let`s turn great ideas into reality together!
      </p>
      <div className="flex items-start justify-center gap-3 text-sm mt-5 text-[#b3b3b3]">
        <div className="flex items-center gap-2 py-2 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px]">
          <IoLocationOutline size={20} />
          <span>Tangerang, Indonesia</span>
        </div>
        <div className="flex items-center gap-2 py-2 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px]">
          <FaUniversity size={20} />
          <span>Gunadarma University</span>
        </div>
      </div>
    </Card>
  );
}
