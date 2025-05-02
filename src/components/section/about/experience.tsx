import Card from "@/components/fragments/card";
import Link from "next/link";
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
          Frontend Web Developer • 2024 - Current
        </h1>
        <p className="mb-4">
          Developing and maintaining the frontend for RIORS, a local sportstyle
          brand. I work with Next.js, Tailwind CSS, and TypeScript to create a
          seamless shopping experience, ensuring a fast, responsive, and
          visually engaging website.
        </p>
      </div>

      {/* JOKI WEBSITE */}
      <div className="flex flex-col items-start justify-center w-full pt-4 border-t border-black-border">
        <Link
          href="/projects"
          // target="_blank"
          className="flex items-center justify-center font-semibold gap-2 py-1 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px] hover:bg-green-background transition-all duration-200"
        >
          <span>Joki Website</span>
          <GrFormNextLink size={25} className="-rotate-45" />
        </Link>
        <h1 className="font-semibold my-2">
          Frontend Web Developer • 2023 - Current
        </h1>
        <p className="mb-4">
          Providing custom website development services for students and
          professionals, specializing in academic projects, final assignments
          (Penelitian Ilmiah), and other web-related tasks. I ensure that every
          project is well-structured, optimized, and tailored to the client`s
          needs, using Next.js, React.js, and modern web technologies.
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
    </Card>
  );
}
