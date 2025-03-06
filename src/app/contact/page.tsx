import React from "react";
import Card from "@/components/fragments/card";

export default function ContactForm() {
  return (
    <Card className="text-left mx-5">
      <h1 className="text-xl lg:text-3xl font-bold mb-4">Get in Touch</h1>

      <p className="text-lg mb-5 lg:mb-8">
        Tell me about your project or idea. Let`s collaborate or let me help you
        bring your project to life!
      </p>

      <form className="space-y-3 lg:space-y-6">
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="text-base lg:text-xl font-medium">Name</span>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 text-sm bg-transparent focus:bg-[#262626] border-b border-black-border text-white placeholder-gray-400"
            placeholder="YOUR FULL NAME"
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <span className="text-base lg:text-xl font-medium">E-mail</span>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 text-sm bg-transparent focus:bg-[#262626] border-b border-black-border text-white placeholder-gray-400"
            placeholder="YOUR EMAIL ADDRESS"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="text-base lg:text-xl font-medium">Message</span>
          <input
            type="text"
            id="message"
            name="message"
            className="w-full p-2 text-sm bg-transparent focus:bg-[#262626] border-b border-black-border text-white placeholder-gray-400"
            placeholder="WEBSITE, FULL-TIME JOB, ETC."
          />
        </div>

        <button
          type="submit"
          className="w-fit text-white py-3 px-6 rounded-lg border border-black-border transition-colors"
        >
          -- Send Info
        </button>
      </form>
      {/* <form className="space-y-3 lg:space-y-6">
        <div className="flex items-center gap-2">
          <span className="text-base lg:text-4xl font-medium">My name is</span>
          <input
            type="text"
            id="name"
            name="name"
            className="flex-1 p-2 text-sm bg-transparent focus:bg-[#262626] border-b border-black-border text-white placeholder-gray-400"
            placeholder="YOUR FULL NAME"
          />
          <span className="text-base lg:text-4xl font-medium">and I</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base lg:text-4xl font-medium">have a</span>
          <input
            type="text"
            id="message"
            name="message"
            className="flex-1 p-2 text-sm bg-transparent focus:bg-[#262626] border-b border-black-border text-white placeholder-gray-400"
            placeholder="WEBSITE, FULL-TIME JOB, ETC."
          />
          <span className="text-base lg:text-4xl font-medium">that needs </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base lg:text-4xl font-medium">
            help. You can reach me at
          </span>
          <input
            type="email"
            id="email"
            name="email"
            className="flex-1 p-2 text-sm bg-transparent focus:bg-[#262626] border-b border-black-border text-white placeholder-gray-400"
            placeholder="YOUR EMAIL ADDRESS"
          />
          <span className="text-base lg:text-4xl font-medium">to </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base lg:text-4xl font-medium">
            get things started.
          </span>
        </div>

        <button
          type="submit"
          className="w-fit text-white py-3 px-6 rounded-lg border border-black-border transition-colors"
        >
          -- Send Info
        </button>
      </form> */}
    </Card>
  );
}
