import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex text-[24px] md:text-4xl font-bold flex-col items-center justify-center p-5 bg-black-background border-[2px] border-black-border rounded-[24px] text-white text-center">
      <h1 className="mb-0 md:mb-4 p-3 rounded-lg flex items-center justify-center gap-x-3">
        Wassup, I`m
        <span className="bg-[#9a63f5] p-2 rounded-[12px] flex items-center justify-center">
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
        <span className="bg-[#f69851] p-2 rounded-[12px]">
          Frontend Developer
        </span>
      </h1>
      <h1 className="p-3 rounded-lg">
        and i`m also{" "}
        <span className="bg-[#69cc7a] p-2 rounded-[12px]">Freelancer</span>
      </h1>
    </div>
  );
}
