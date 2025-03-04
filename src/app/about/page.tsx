// pages/index.js
import Card from "@/components/fragments/card";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <Card>
      <h1 className="mb-0 md:mb-4 p-3 rounded-lg flex items-center justify-center gap-x-3">
        Hallo again, this is my
        <span className="bg-[#9a63f5] p-2 rounded-[12px] flex items-center justify-center">
          About
          <Image
            src="/me-icon.avif"
            alt="yudan icon"
            width={100}
            height={100}
            className="w-[35px] md:w-[50px] h-[35px] md:h-[50px]"
          />
        </span>
      </h1>
    </Card>
  );
}
