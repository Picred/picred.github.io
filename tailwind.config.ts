import type { Config } from "tailwindcss";

// All color tokens reference CSS vars defined in index.css.
// Add new semantic colors here — never hardcode values in components.
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        syne:      ["Syne", "sans-serif"],
        "dm-mono": ["DM Mono", "monospace"],
        outfit:    ["Outfit", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border:        "hsl(var(--border))",
        "border-dim":  "hsl(var(--border-dim))",
        "border-soft": "hsl(var(--border-soft))",
        "border-main": "hsl(var(--border-main))",
        input:         "hsl(var(--input))",
        ring:          "hsl(var(--ring))",
        background:    "hsl(var(--background))",
        foreground:    "hsl(var(--foreground))",
        "bg-void":     "hsl(var(--bg-void))",
        "bg-base":     "hsl(var(--bg-base))",
        "bg-surface":  "hsl(var(--bg-surface))",
        "bg-elevated": "hsl(var(--bg-elevated))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          dim: "hsl(var(--accent-dim))",
          mid: "hsl(var(--accent-mid))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        green:           "hsl(var(--green))",
        gold:            "hsl(var(--gold))",
        "text-hi":       "hsl(var(--text-hi))",
        "text-primary":  "hsl(var(--text-primary))",
        "text-secondary":"hsl(var(--text-secondary))",
        "text-muted":    "hsl(var(--text-muted))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
