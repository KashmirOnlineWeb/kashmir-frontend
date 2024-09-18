import type { Config } from "tailwindcss";
/* You can use @apply when moving this into your tailwind css file, like so */
/*
input[type="radio"]:checked + span {
  @apply block;
}
*/
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/provider/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "14px",
      xs: "12px",
      xl: "20px",
      lg: "18px",
      "21xl": "40px",
      base: "16px",
      "9xl": "28px",
      smi: "13px",
      "2xs": "11px",
      mid: "17px",
      "3xs-4": "9.4px",
      "smi-1": "12.1px",
      "2xs-8": "10.8px",
      "5xl": "24px",
      inherit: "inherit",
    },
    extend: {
      colors: {
        black: "#000",
        mediumblue: {
          100: "#0022cc",
          200: "rgba(0, 34, 204, 0.1)",
          300: "rgba(0, 34, 204, 0.05)",
        },
        darkslategray: {
          100: "#474a57",
          200: "#4b4b4b",
        },
        gray: {
          50: "#919EAB",
          100: "rgba(23, 23, 23, 0.8)",
          200: "rgba(255, 255, 255, 0.5)",
        },
        pink: "#DD1045",
        btnBlue: "rgb(0, 34, 204)",
        bgRed: "#e00",
        silver: "#C9C9C9",
        gainsboro: "#d9d9d9",
        smokegrey: "#9f9f9f80",
        whitesmoke: "#eee",
        whitegrey: "#0022cc05",
        blueborder: "#0022cc26",
        borderlight: "#e0e0e0",
        darkblue: "rgba(0, 55, 204, 0.10)",
        darkgray: "#9f9f9f80",
        "text-gray-700": "#969bab",
        "brand-purple": "#8c30f5",
        "text-gray-900": "#18191f",
        "text-gray-300": "#d9dbe1",
        "default-white": "#fff",
        "text-pink" : "#DD1045",
      },
      fontFamily: {
        helvetica: "Helvetica",
        "others-capitalised": "Inter",
        body: "Work Sans",
        roboto: "Roboto",
      },
      borderRadius: {
        "6xl": "25px",
        "31xl": "50px",
        mini: "15px",
        "base-9": "16.9px",
        "sm-5": "13.5px",
        "11xs-4": "1.4px",
        "smi-9": "12.9px",
        "81xl": "100px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
