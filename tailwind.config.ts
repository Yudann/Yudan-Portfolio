import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-border": "#FFFFFF1A",
        "black-background": "#212121BD",
        "purple-background": "#9a63f5",
        "orange-background": "#f69851",
        "green-background": "#69cc7a",
        "blue-background": "#4da7ed"

      },
    },
  },
  plugins: [],
} satisfies Config;
