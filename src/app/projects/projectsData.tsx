import { Project } from "@/types/projectCard.type";
import { FaAndroid, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";

export const projects: Project[] = [
  {
    id: 1,
    title: "Tensi Edu",
    slug: "/projects/tensi-edu",
    bgGradient: "from-cyan-200 via-cyan-300 to-cyan-500",
    description:
      "A mobile app for monitoring blood pressure with reports, recommendations, and daily reminders.",
    images: ["/projects/tensi-edu-7.png"],
    tags: [
      { icon: <FaReact />, label: "React Native" },
      { icon: <FaAndroid />, label: "Mobile App" },
    ],
    overview:
      "Tensi Edu is a mobile application designed to help users measure and monitor their blood pressure. This project was developed as a collaboration, where I contributed as a frontend mobile developer to assist my friend from the nursing department who needed technical support. The app aims to provide an easy and efficient way for users to keep track of their blood pressure levels.",
    solution:
      "The application includes features such as real-time blood pressure measurement tracking, automated report logging, and personalized recommendations for users whose blood pressure levels are not within the normal range. Additionally, it provides educational articles and video recommendations for users with hypertension or hypotension. A daily reminder system is also integrated to help users maintain consistency in monitoring their blood pressure. The app requires users to register and log in before accessing its features, ensuring personalized tracking and secure data storage.",
    result:
      "Tensi Edu successfully provides a comprehensive and user-friendly solution for blood pressure monitoring. The app helps users better understand their health conditions and take appropriate actions based on recommendations. With a simple and intuitive interface, it ensures accessibility for all users, including those without a technical background.",
  },

  {
    id: 2,
    title: "Tracker Str",
    slug: "/projects/tracker-str",
    bgGradient: "from-purple-300 via-purple-400 to-indigo-500",
    description:
      "A web app for cognitive and motor therapy with exercises, tracking, and educational content.",
    images: ["/projects/tracker-str-7.png"],
    tags: [
      { icon: <SlGlobe />, label: "Web App" },
      { icon: <SiNextdotjs />, label: "Next JS" },
      { icon: <RiTailwindCssFill />, label: "Tailwind" },
    ],
    overview:
      "Tracker Str is a web application designed to support cognitive and motor therapy. This project was developed for a friend in the nursing field, where I contributed as a solo developer to build a user-friendly platform for therapy exercises and progress tracking.",
    solution:
      "The app provides structured motor therapy exercises such as hand and foot movements, along with other motor skill training sessions. These exercises are integrated with video tutorials from YouTube for better guidance. In addition to motor therapy, the app also includes cognitive exercises such as reading, arithmetic, and other mental stimulation activities. Users can track their progress, set reminders through an alarm feature, and access educational content related to therapy and rehabilitation.",
    result:
      "Tracker Str has successfully provided a structured and accessible platform for cognitive and motor therapy. With its intuitive design and seamless integration of educational content, the app helps users engage in therapy more effectively while maintaining consistency through tracking and reminders.",
  },

  {
    id: 3,
    title: "Riors E-Commerce Website",
    slug: "/projects/riors",
    bgGradient: "from-gray-800 via-gray-900 to-black",
    description:
      "A modern and high-performance e-commerce website for Riors brand.",
    images: ["/projects/riors-7.png"],
    tags: [
      { icon: <SlGlobe />, label: "E-Commerce" },
      { icon: <SiNextdotjs />, label: "Next JS" },
      { icon: <RiTailwindCssFill />, label: "Tailwind" },
    ],
    overview:
      "Riors E-Commerce is a revamped online marketplace designed to provide a seamless and modern shopping experience. The project was undertaken as a frontend development upgrade to replace the brand’s outdated e-commerce website with a sleek, high-performance platform.",
    solution:
      "The new website was built using Next.js and Tailwind CSS, ensuring a fast, responsive, and scalable experience. It features a complete product catalog, detailed product pages, an intuitive shopping cart, and a streamlined checkout process. The landing page is designed with a modern and minimalistic aesthetic, taking inspiration from leading brands like Nike and Adidas.",
    result:
      "The redesigned Riors website successfully elevated the brand's online presence, offering an improved user experience with modern UI/UX principles. The platform provides a seamless e-commerce experience that matches industry standards and enhances customer engagement.",
  },
];
