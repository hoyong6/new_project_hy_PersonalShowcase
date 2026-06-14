import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        rain: "#8fb6d8",
        signal: "#6ee7f9",
      },
      boxShadow: {
        glow: "0 0 45px rgba(110, 231, 249, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
