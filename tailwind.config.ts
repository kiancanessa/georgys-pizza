import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#F5ECD7",
        linen:     "#EDE0C8",
        tomato:    "#B82C1A",
        tomato2:   "#8C1F10",
        olive:     "#4A5E3A",
        olive2:    "#354329",
        wood:      "#2C1509",
        wood2:     "#1A0900",
        gold:      "#C9922A",
        gold2:     "#A87420",
        cream:     "#FBF5E8",
        ink:       "#1A0D00",
        muted:     "#7A6652",
        rust:      "#8B3A2A",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        script:  ["'Dancing Script'", "cursive"],
        sans:    ["'Josefin Sans'", "sans-serif"],
      },
      animation: {
        "spin-slow":  "spin 20s linear infinite",
        "float":      "float 5s ease-in-out infinite",
        "marquee":    "marquee 28s linear infinite",
        "fade-up":    "fadeUp .7s ease forwards",
        "fade-in":    "fadeIn .8s ease forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        float:      { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-14px)" } },
        marquee:    { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } },
        fadeUp:     { from: { opacity: "0", transform: "translateY(30px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:     { from: { opacity: "0" }, to: { opacity: "1" } },
        pulseSoft:  { "0%,100%": { opacity: "0.7" }, "50%": { opacity: "1" } },
      },
      boxShadow: {
        warm:    "0 4px 24px rgba(44,21,9,.25)",
        "warm-lg":"0 8px 48px rgba(44,21,9,.4)",
        glow:    "0 0 40px rgba(184,44,26,.3)",
      },
    },
  },
  plugins: [],
};

export default config;
