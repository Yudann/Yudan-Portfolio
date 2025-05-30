import Card from "@/components/fragments/card";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

export default function ExperienceSection() {
  return (
    <Card className="text-left">
      <h1 className="mb-4 text-2xl font-semibold">Experience</h1>

      {/* RIORS */}

      <div className="flex flex-col items-start justify-center w-full mt-2">
        <Link
          href="https://demo.riors.com/"
          target="_blank"
          className="flex items-center justify-center gap-2 py-1 px-3 border-[2px] bg-[#262626] font-semibold border-black-border rounded-[12px] hover:bg-purple-background transition-all duration-200"
        >
          <span>RIORS</span>
          <GrFormNextLink size={25} className="-rotate-45" />
        </Link>
        <h1 className="font-semibold my-2">
          Frontend Web Developer • 2024 - 2025
        </h1>
        <p className="mb-4">
          Developing and maintaining the frontend for RIORS, a local sportstyle
          brand. I work with Next.js, Tailwind CSS, and TypeScript to create a
          seamless shopping experience, ensuring a fast, responsive, and
          visually engaging website.
        </p>
      </div>
      <div className="flex flex-col items-start justify-center w-full pt-4 border-t border-black-border">
        <Link
          href="https://foody-app-pi.vercel.app/"
          target="_blank"
          className="flex items-center justify-center font-semibold gap-2 py-1 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px] hover:bg-green-background transition-all duration-200"
        >
          <span>Foody App</span>
          <GrFormNextLink size={25} className="-rotate-45" />
        </Link>
        <h1 className="font-semibold my-2">
          Full Stack Web Developer • 2025 - Current
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          necessitatibus excepturi ratione perferendis eveniet itaque adipisci
          voluptas expedita repudiandae rerum consequuntur, culpa molestias
          quos, cupiditate asperiores laudantium, sint quis atque! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nisi, corporis.
        </p>
      </div>
      {/* Yudan Course */}
      <div className="flex flex-col items-start justify-center w-full pt-4 border-t border-black-border">
        <Link
          href="https://yudan-course.vercel.app/"
          target="_blank"
          className="flex items-center justify-center font-semibold gap-2 py-1 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px] hover:bg-green-background transition-all duration-200"
        >
          <span>Yudan Course Website</span>
          <GrFormNextLink size={25} className="-rotate-45" />
        </Link>
        <h1 className="font-semibold my-2">
          Full stack Web Developer• 2025 - Current
        </h1>
        <p className="mb-4">
          Yudan Course is an educational web platform I built to support
          students and aspiring developers in learning modern web development.
          This full-stack project showcases my ability to design, develop, and
          deploy scalable web applications using technologies such as Next.js,
          React.js, TypeScript, Tailwind CSS, and more. Beyond the technical
          implementation, I focused on creating a clean user experience,
          reusable components, and efficient API handling with best practices in
          mind.
        </p>
      </div>

      {/* WEBSITE BEM FIKTI UG 2025 */}
      <div className="flex flex-col items-start justify-center w-full pt-4 border-t border-black-border">
        <Link
          href="https://bemfikti-gunadarma.web.id/"
          target="_blank"
          className="flex items-center justify-center font-semibold gap-2 py-1 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px] hover:bg-green-background transition-all duration-200"
        >
          <span>BEM FIKTI UG </span>
          <GrFormNextLink size={25} className="-rotate-45" />
        </Link>
        <h1 className="font-semibold my-2">
          Frontend Web Developer • 2024 - Current
        </h1>
        <p>
          Developing the official website for BEM FIKTI Universitas Gunadarma as
          the frontend developer. I used <strong>Next.js</strong> and{" "}
          <strong>Tailwind CSS</strong> to build a modern, responsive, and
          user-friendly platform that helps students easily access information
          about campus events, organizational activities, and other resources.
          This project gave me the opportunity to implement clean UI/UX
          practices and deliver a fast, accessible experience tailored for
          university students.
        </p>
      </div>
      <div className="w-fit self-end">
        <Link
          href="/projects"
          className="mt-8 flex items-center  justify-end px-6 py-3 gap-4 border-[2px] bg-[#262626] border-black-border rounded-[12px] hover:bg-green-background transition-all duration-200"
        >
          <span>See More</span>
          <FaArrowRight size={20} />
        </Link>
      </div>
    </Card>
  );
}
