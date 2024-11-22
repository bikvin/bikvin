import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bodybackground: "#ededed",
        maingreen: "#57722C",
        gray1: "#606C65",
        gray2: "#DCDAD7",
        gray3: "#323337",
        gray4: "#5B736A",
        gray5: "#393C42",
        gray6: "#323133",
        black1: "#010101",
        blue1: "#C7E0F3",
        violet1: "#CCCCEF",
        violet2: "#D1C3EC",
        violet3: "#8668BA",
        green1: "#83BFB9",
        green2: "#B8E1D6",
        orange1: "#F68831",
        white1: "#FEFEFF",
      },

      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        baskerville: ["var(--font-baskerville)", "serif"],
      },

      boxShadow: {
        photo: "10px 10px 16px 6px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
