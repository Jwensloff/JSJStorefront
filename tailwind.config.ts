import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT")

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1275px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "gray-custom": "#D9D9D9",
      },
    },
  },
  plugins: [],
});
export default config;