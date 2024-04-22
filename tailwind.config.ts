import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      custom: "0 4px 28px -2px rgba(#000000, 0.8)",
    },
    colors: {
      primary: {
        "100": "#003459",
        "80": "#002A48",
        "60": "#00528C",
        "40": "#0078CD",
      },
      secondary: {
        "100": "#F7DBA7",
        "80": "#EEC77E",
        "60": "#F1D092",
        "40": "#FCEED5",
      },
      state: {
        red: "#FF564F",
        green: "#34C759",
        orange: "#FF912C",
        blue: "#00A7E7",
      },
      neutral: {
        "100": "#00171F",
        "80": "#242B33",
        "60": "#667479",
        "40": "#99A2A5",
        "20": "#CCD1D2",
        "10": "#EBEEEF",
        "00": "#FDFDFD",
      },
    },
  },
  plugins: [],
};
export default config;
