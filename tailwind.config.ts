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
        // 도플라밍고 팔레트
        ink: "#170D20", // 기본 배경
        plum: "#2B1535", // 보조 배경 (카드)
        flamingo: "#F146A0", // 강조색
        ivory: "#FFF4F8", // 본문색
        gold: "#D9B66F", // 작은 장식·배지 전용
      },
    },
  },
  plugins: [],
};
export default config;
