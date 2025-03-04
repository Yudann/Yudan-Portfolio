// pages/index.js
import AboutDetailSection from "@/components/section/about/aboutDetail";
import ProfileCard from "@/components/section/about/profileCard";
import SocialMediaSection from "@/components/section/about/socialMedia";
import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-5 px-5 lg:px-20 mb-28 h-fit py-5">
      <div className="relative md:sticky md:top-5">
        <ProfileCard />
      </div>
      <div className="space-y-5 w-full ">
        <AboutDetailSection />
        <SocialMediaSection />
      </div>
    </section>
  );
}
