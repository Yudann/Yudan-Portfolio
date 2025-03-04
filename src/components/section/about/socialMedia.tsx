import Card from "@/components/fragments/card";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

export default function SocialMediaSection() {
  return (
    <Card className="text-left">
      <h1 className="mb-4 text-2xl font-semibold">Come and say hi!</h1>
      <div className="flex flex-col items-center justify-center gap-2 w-full  text-sm font-normal">
        <a
          href="https://www.instagram.com/yudanns_"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center py-3 border border-black-border bg-[#262626] rounded-lg gap-2 text-white transition-all duration-300 hover:bg-[#E4405F]"
        >
          <FaInstagram size={20} /> @yudanns_
        </a>
        <a
          href="https://id.linkedin.com/in/yudanns"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center py-3 border border-black-border bg-[#262626] rounded-lg gap-2 text-white transition-all duration-300 hover:bg-[#0077B5]"
        >
          <FaLinkedin size={20} /> BartolomeusYudantoro
        </a>
        <a
          href="http://youtube.com/@yudanns"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center py-3 border border-black-border bg-[#262626] rounded-lg gap-2 text-white transition-all duration-300 hover:bg-[#FF0000]"
        >
          <FaYoutube size={20} /> yudanns
        </a>
        <a
          href="mailto:yudannnnn80@gmail.com"
          className="w-full flex items-center justify-center py-3 border border-black-border bg-[#262626] rounded-lg gap-2 text-white transition-all duration-300 hover:bg-[#D44638]"
        >
          <FaEnvelope size={20} /> Email
        </a>
        <a
          href="https://twitter.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center py-3 border border-black-border bg-[#262626] rounded-lg gap-2 text-white transition-all duration-300 hover:bg-[#000000]"
        >
          <FaXTwitter size={20} /> (Twitter)
        </a>
      </div>
    </Card>
  );
}
