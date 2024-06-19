import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      container: ({ theme }) => {
        return {
          center: true,
          padding: {
            DEFAULT: "1rem",
            sm: "2rem",
          },
          screens: {
            ...theme("screens"),
            mobile: "40em",
          },
        };
      },
      fontFamily: {
        ld: ["var(--font-lexend-deca)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-dark": "#010101",
        "brand-dark-2": "#131212",
        primary: "#EB303D",
        "brand-red": "#FC4747",
        "greyish-blue": "#5A698F",
        "semi-dark-blue": "#161D2F",
        "dark-blue": "#10141E",
        "pd-border": "rgba(255, 255, 255, 0.25)",
        "hv-input": "rgba(30, 29, 29, 0.8)",
      },
      screens: {
        mobile: "28.125em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  important: true,
};
export default config;
