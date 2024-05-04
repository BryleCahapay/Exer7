import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'home-background':  "url('https://lh3.googleusercontent.com/proxy/_nDU8sqn6VO4amkgkxUSw4E86EWMPY9i9fMCQ1OQI-GNTHiXJjY7d6qarXR7c2XKwIRPe07gmzSTJ_w')",
        },
      colors: {
        'custom-blue': '#1877f2',
        'bg-color': '#f0f2f5',
        'green-btn': '#42b72a',
        'background': '#B4D4FF',
        'box-color': '#6962AD',
        'custom-btn': '#B4BDFF',
        'custom-header': '#1E0342'
      },
    },
  },
  plugins: [],
};
export default config;
