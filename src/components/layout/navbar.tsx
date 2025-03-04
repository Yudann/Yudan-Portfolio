"use client";

import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { CiUser, CiMail } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

const navItems = [
  { href: "/", icon: <GoHome size={25} />, label: "Home" },
  { href: "/about", icon: <CiUser size={25} />, label: "About" },
  {
    href: "/projects",
    icon: <PiPaintBrushDuotone size={25} />,
    label: "Projects",
  },
  { href: "/tech-stack", icon: <FaCode size={25} />, label: "Tech Stack" },
  { href: "/contact", icon: <CiMail size={25} />, label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-center z-50">
      <nav className="fixed bottom-4 z-50 px-4 py-2 backdrop-blur-lg w-min flex items-center justify-center gap-3 rounded-[24px] bg-black-background border-[2px] border-black-border">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <div key={index} className="relative group">
              <Link href={item.href}>
                <div
                  className={`w-fit h-full text-white rounded-[16px] p-3 border border-black-border cursor-pointer transition-all duration-300 
                ${
                  isActive
                    ? "bg-blue-400 border-blue-300"
                    : "bg-black-background"
                }`}
                >
                  {item.icon}
                </div>
              </Link>

              {isActive && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] w-[50%] h-[2px] bg-black-border rounded-md" />
              )}

              <span className="absolute left-1/2 -translate-x-1/2 bottom-[65px] backdrop-blur-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-blue-300  bg-black-background border-[2px] border-black-border text-sm whitespace-nowrap px-3 py-1 rounded-lg shadow-md">
                {item.label}
              </span>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
