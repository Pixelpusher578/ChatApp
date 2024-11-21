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
        background: "var(--background)",
        foreground: "var(--foreground)",
        customDarkBlue: '#040019',
        custommedbule: '#110D24',

      },
    },
  },
  plugins: [    require('daisyui'),],
  variants: {
    scrollbar: ['rounded'], // Optional: add custom scrollbar variants
  },
};
export default config;
