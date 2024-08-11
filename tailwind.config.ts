import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Carbon: "#333",
        white: "#FFF",
        Industrial_Revolution: "#737373",
        Orochimaru: "#D9D9D9",
        Pink_OCD: "#633CFF",
        Red_Orange: "#FF3939",
        Winterspring_Lilac: "#BEADFF",
        Dr_White: "#FAFAFA",
      },
      boxShadow: {
        "custom-purple": "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
