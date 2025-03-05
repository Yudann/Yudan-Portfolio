// pages/index.js
import Card from "@/components/fragments/card";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <Card className="text-[24px] md:text-4xl font-bold">
      <h1 className="mb-0 md:mb-4 p-3 rounded-lg flex items-center justify-center gap-x-3">
        Wassup, I`m
        <span className="bg-purple-background p-2 rounded-[12px] flex items-center justify-center">
          Yudan
          <Image
            src="/me-icon.avif"
            alt="yudan icon"
            width={100}
            height={100}
            className="w-[35px] md:w-[50px] h-[35px] md:h-[50px]"
          />
        </span>
      </h1>
      <h1 className="mb-0 md:mb-4 p-3 rounded-lg">
        I`m a{" "}
        <span className="bg-orange-background p-2 rounded-[12px]">
          Frontend Developer
        </span>
      </h1>
      <h1 className="p-3 rounded-lg">
        and i`m also{" "}
        <span className="bg-green-background p-2 rounded-[12px]">
          Freelancer
        </span>
      </h1>
    </Card>
  );
}
