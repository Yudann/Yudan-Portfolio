"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/fragments/card";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation"; // Import useSearchParams

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const searchParams = useSearchParams(); // Inisialisasi useSearchParams

  // Ambil pesan dari query parameter
  useEffect(() => {
    const message = searchParams.get("message");
    if (message) {
      setForm((prevForm) => ({
        ...prevForm,
        message: decodeURIComponent(message),
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChange2 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send("service_sf79vxu", "template_w3o9hcl", form, "CkhkdhNvxcE7Hmt2w")
      .then(() => {
        setStatus("Success! Your message has been sent.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send message. Try again later."));
  };

  return (
    <Card className="text-left mx-5">
      <h1 className="text-xl lg:text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg mb-5 lg:mb-8">
        Tell me about your project or idea. Let’s collaborate or let me help you
        bring your project to life!
      </p>

      <form className="space-y-3 lg:space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-base lg:text-xl font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 bg-transparent focus:bg-[#262626] border-b border-black-border text-white placeholder-gray-400"
            placeholder="YOUR FULL NAME"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base lg:text-xl font-medium">E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 bg-transparent focus:bg-[#262626] border-b border-black-border text-white placeholder-gray-400"
            placeholder="YOUR EMAIL ADDRESS"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base lg:text-xl font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange2}
            className="w-full p-2 bg-transparent focus:bg-[#262626] border-b border-black-border text-white placeholder-gray-400 resize-y min-h-[100px]"
            placeholder="YOUR MESSAGE"
            required
          />
        </div>

        <button
          type="submit"
          className="w-fit text-white py-3 px-6 rounded-lg border border-black-border transition-colors"
        >
          -- Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-sm text-green-500">{status}</p>}
    </Card>
  );
}
