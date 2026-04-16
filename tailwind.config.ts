import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
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
        },
        // Semantic aliases using the custom palette
        background: {
          DEFAULT: "#ffcccc",
          soft: "#ffe1e1",
          muted: "#ffb8b8",
        },
        accent: {
          DEFAULT: "#75b9be",
          light: "#bee1e3",
          dark: "#34626a",
        },
      },
      fontSize: {
        "display-xl": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg": [
          "2.5rem",
          { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
      },
      boxShadow: {
        card: "0 2px 8px rgba(44, 70, 77, 0.08)",
        "card-hover": "0 8px 24px rgba(44, 70, 77, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
