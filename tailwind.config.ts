import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mypink: {
          100: "#ffe1e1", 
          200: "#ffcccc",
          400: "#fb6e6e",  
          500: "#F34040",
          700: "#bc1919",
          900: "#811b1b",
        },
        neptune: {
          100: "#D9D9D9",
          200: "#bee1e3",
          400: "#75b9be",
          700: "#34626a",
          900: "#2c464d",
        }
      },
    }
  },
  plugins: [],
};
export default config;
