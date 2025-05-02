"use client";

import Card from "@/components/fragments/card";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    { id: 1, img: "/projects/riors-7.png", x: "-180%", y: "-125%" },
    { id: 2, img: "/projects/tensi-edu-7.png", x: "-50%", y: "-150%" },
    { id: 3, img: "/projects/tracker-str-7.png", x: "80%", y: "-125%" },
    { id: 4, img: "/projects/tracker-str-4.png", x: "-180%", y: "25%" },
    { id: 5, img: "/projects/tensi-edu-4.png", x: "80%", y: "25%" },
    { id: 6, img: "/projects/tracker-str-2.png", x: "-50%", y: "50%" },
  ];


// ! TAMBAHKAN EFFEK BACKGROUND GONTA GNATI WARNA BIAR MENARIK

  return (
    <div className="relative flex items-center justify-center min-h-screen w-screen">
      <motion.div
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Card utama */}
        <Card className="text-[24px] md:text-4xl font-bold relative z-10 backdrop-blur-md">
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

        {/* Project images yang muncul pas hover */}
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1, x: project.x, y: project.y }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.3 }}
            className="absolute w-[100px] h-[100px] md:w-[250px] md:h-[250px] rounded-xl overflow-hidden shadow-lg p-8 bg-gradient-to-b from-blue-background via-blue-background to-[#a3d5ff] aspect-square"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={project.img}
              alt={`Project ${project.id}`}
              width={1000}
              height={1000}
              className="w-full "
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
