"use client";

import { FaCheck } from "react-icons/fa"; // Ikon ceklis
import Card from "@/components/fragments/card";
import { useRouter } from "next/navigation";
import { useState } from "react"; // Import useState untuk toggle

const services = {
  web: [
    {
      title: "Basic Frontend",
      price: "Start from Rp. 900.000!",
      description: "Cocok untuk landing page, company profile, atau UI statis.",
      features: [
        "1-5 halaman",
        "Responsive design",
        "Animasi minimal",
        "Integrasi API dummy",
      ],
    },
    {
      title: "Standard Frontend",
      price: "Start from Rp. 4.000.000",
      description:
        "Cocok untuk dashboard admin, website edukasi, atau UI interaktif.",
      features: [
        "5-10 halaman",
        "UI kompleks (tabel, modal, form interaktif)",
        "Fetching API dari backend",
        "State management (Zustand, Redux, )",
      ],
    },
    {
      title: "Advanced Frontend",
      price: "Start from Rp. 8.000.000",
      description:
        "Cocok untuk e-commerce frontend, dashboard kompleks, atau aplikasi mobile dengan banyak fitur.",
      features: [
        "Integrasi API backend",
        "Custom UI/UX dari Figma",
        "Optimasi performa & SEO",
        "PWA support (opsional)",
      ],
    },
  ],
  mobile: [
    {
      title: "Basic Mobile App",
      price: "Start from Rp. 2.000.000",
      description:
        "Cocok untuk aplikasi mobile sederhana berbasis React Native.",
      features: [
        "1-3 layar",
        "UI sederhana",
        "Tanpa backend",
        "Deploy ke Android (APK)",
      ],
      isAvailable: true, // Tandai layanan yang tersedia
    },
    {
      title: "Standard Mobile App",
      price: "Start from Rp. 10.000.000",
      description:
        "Cocok untuk aplikasi dengan fitur autentikasi & integrasi API.",
      features: [
        "3-8 layar",
        "State management (Redux/Zustand)",
        "Integrasi API",
        "Deploy ke Play Store",
      ],
      isAvailable: false, // Tandai layanan yang tidak tersedia
    },
    {
      title: "Advanced Mobile App",
      price: "Start from Rp. 20.000.000",
      description:
        "Cocok untuk aplikasi skala besar seperti e-commerce atau social media.",
      features: [
        "10+ layar",
        "Fitur kompleks (chat, push notification, dll.)",
        "Optimasi performa",
        "Deploy ke Play Store & App Store",
      ],
      isAvailable: false, // Tandai layanan yang tidak tersedia
    },
  ],
};

export default function ServicesPage() {
  const router = useRouter(); // Inisialisasi useRouter
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web"); // State untuk toggle

  // Fungsi untuk mengarahkan ke halaman kontak dengan pesan yang sudah diisi
  const handleGetStarted = (serviceTitle: string, serviceType: string) => {
    const message = `Hallo Yudan, saya ada project ${serviceType}, dan saya memilih paket ${serviceTitle}. Bisakah kita bicarakan lebih lanjut?`;
    router.push(`/contact?message=${encodeURIComponent(message)}`);
  };

  return (
    <Card className="mt-20 mx-5">
      <p className="text-center text-gray-400 text-sm md:text-base mb-10">
        Simple Pricing Plans
      </p>

      {/* Toggle Button */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-800 p-1 rounded-full flex">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              activeTab === "web"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              activeTab === "mobile"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            Mobile Development
          </button>
        </div>
      </div>

      {/* Section Jasa */}
      <section>
        <div className="relative">
          {/* Animasi geser */}
          <div
            className={`grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-transform duration-500 ${
              activeTab === "mobile" ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            {/* Web Development Services */}
            {activeTab === "web" &&
              services.web.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 text-left hover:shadow-lg hover:shadow-white/50 transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-400 font-medium">{service.price}</p>
                  <p className="text-sm text-gray-300 my-4">
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <FaCheck className="mr-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      handleGetStarted(service.title, "Web Development")
                    }
                    className="mt-6 w-full bg-blue-background text-white py-2 rounded-md hover:bg-blue-500 transition-colors duration-300"
                  >
                    Get Started
                  </button>
                </Card>
              ))}

            {/* Mobile Development Services */}
            {activeTab === "mobile" &&
              services.mobile.map((service, index) => (
                <Card
                  key={index}
                  className={`p-6 text-left ${
                    !service.isAvailable
                      ? "opacity-50"
                      : "hover:shadow-white/50"
                  } hover:shadow-lg transition-shadow duration-300`}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-400 font-medium">{service.price}</p>
                  <p className="text-sm text-gray-300 my-4">
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <FaCheck className="mr-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      handleGetStarted(service.title, "Mobile Development")
                    }
                    className={`mt-6 w-full ${
                      service.isAvailable
                        ? "bg-blue-background hover:bg-blue-500"
                        : "bg-gray-400 cursor-not-allowed"
                    } text-white py-2 rounded-md transition-colors duration-300`}
                    disabled={!service.isAvailable}
                  >
                    {service.isAvailable ? "Get Started" : "Not Available"}
                  </button>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </Card>
  );
}
 