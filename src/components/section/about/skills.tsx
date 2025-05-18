"use client";

import Card from "@/components/fragments/card";
import { useEffect, useState } from "react";
import { FaMousePointer } from "react-icons/fa"; // Icon untuk cursor

const SkillsSection = () => {
  const skills = [
    { name: "UI/UX DESIGN", id: "ux-design", top: 20, left: 50 },
    { name: "FRONT END", id: "fronted-web-dev", top: 50, left: 550 },
    { name: "WEB DEVELOPER", id: "web-developer", top: 150, left: 450 },
    { name: "MOBILE DEVELOPER", id: "mobile-developer", top: 200, left: 150 },
    { name: "DATA STRUCTURE", id: "data-structure", top: 10, left: 350 },
  ];

  const [activeSkill, setActiveSkill] = useState(0);
  const [animationPhase, setAnimationPhase] = useState("phase1"); // phase1 atau phase2

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => {
        if (prev === skills.length - 1) {
          setAnimationPhase((phase) =>
            phase === "phase1" ? "phase2" : "phase1"
          );
          return 0; // Kembali ke skill pertama
        } else {
          return prev + 1; // Lanjut ke skill berikutnya
        }
      });
    }, 2000); // Durasi setiap animasi (2 detik)

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <Card className="overflow-hidden text-left">
      <h1 className="mb-10 text-2xl font-semibold">Skills</h1>
      {/* Container untuk skill */}
      <div className="w-full h-[300px] relative">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            id={skill.id}
            className="absolute text-white bg-gray-800 px-4 py-2 rounded-lg cursor-pointer skill-item"
            style={{
              // Posisi yang sudah ditentukan
              top: `${skill.top}px`,
              left: `${skill.left - 100}px`,
              // Animasi berdasarkan fase
              transform:
                animationPhase === "phase1" && activeSkill >= index
                  ? "translate(50px, 50px)" // Tetap di posisi kanan bawah setelah fase 1
                  : animationPhase === "phase2" && activeSkill >= index
                  ? "translate(0, 0)" // Kembali ke posisi awal setelah fase 2
                  : "translate(0, 0)", // Posisi awal
              transition: "transform 2s ease-in-out", // Animasi transisi
            }}
          >
            {skill.name}
            {/* Cursor Icon */}
            <div className="absolute -top-6 -left-6 text-blue-500 animate-pulse">
              <FaMousePointer className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SkillsSection;
