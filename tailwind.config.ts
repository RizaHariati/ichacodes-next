import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transitionDuration: {
      DEFAULT: "800ms",
    },
    fontFamily: {
      oswald: ["var(--oswald)", "sans-serif"],
      poppins: ["var(--poppins)", "sans-serif"],
    },
    extend: {
      animation: {
        "bounce-once": "bounce 1s ease-in-out once",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        textDrk: "#1e293b",
        textMed: "#484943",
        textLit: "#7C7D6D",
        fillLitSolid: "#F3F4EF",
        fillLit: "#BFBAB7",
        fillLithover: "#1e293b",
        fillMed: "#334155",
        fillLitactive: "#FDFCFB",
        LitBorder: "#F3F4EF",
        DrkBorder: "#7C7D6D",
        button: "#7C7D6D",
        buttonHover: "#96988A",
        buttonActive: "#545750",
        accent: "#C99383",
        accentHover: "#d4a99c",
        accentActive: "#dfbeb5",
        accentOpacity: "#dfbeb55e",
        shadow: "#1e293b",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
export default config;
