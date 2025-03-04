import Card from "@/components/fragments/card";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function ProfileCard() {
  return (
    <Card className="items-start text-left">
      <div className="border rounded-full overflow-hidden my-5 md:my-20 ">
        <Image
          src="/yudan_1.png"
          alt="yudan icon"
          width={1000}
          height={1000}
          className="w-[200px] h-[200px] md:w-[200px] md:h-[200px]"
        />
      </div>
      <h1 className="mb-4 text-2xl font-bold">Hey again 👋</h1>
      <p className="text-base font-normal">
        I`m Yudan, a web developer passionate about crafting digital experiences
        that are smooth, engaging, and make life just a little bit easier.
        Currently exploring the depths of Next.js, Tailwind CSS, and modern web
        technologies, I love turning ideas into beautiful, functional, and
        efficient web applications. Let`s build something amazing together!
      </p>
      <div className="flex items-start justify-center gap-3 text-sm mt-5 text-[#b3b3b3] ">
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
