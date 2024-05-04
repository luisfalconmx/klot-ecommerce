import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8E6CEF",
        pearl: "#F4F4F4",
        dark: {
          100: "#1D182A",
          200: "#342F3F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
