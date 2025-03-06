import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        anybody: "var(--font-anybody)",
        lato: "var(--font-lato)",
        satisfy: "var(--font-satisfy)",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
} satisfies Config;
