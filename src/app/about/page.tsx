// pages/index.js
import AboutDetailSection from "@/components/section/about/aboutDetail";
import ExperienceSection from "@/components/section/about/experience";
import ProfileCard from "@/components/section/about/profileCard";
import SkillsSection from "@/components/section/about/skills";
import SocialMediaSection from "@/components/section/about/socialMedia";
import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between gap-5 px-5 lg:px-20 mb-28 h-fit py-5">
      <div className="relative lg:sticky lg:top-5 w-full lg:w-1/2">
        <ProfileCard />
      </div>
      <div className="space-y-5 w-full lg:w-1/2">
        <AboutDetailSection />
        <ExperienceSection />
        <SkillsSection />
        <SocialMediaSection />
      </div>
    </section>
  );
}
