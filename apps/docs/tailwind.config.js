// @ts-check
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"]
      },
      colors: {
        brand: {
          DEFAULT: "rgb(222 50 67)",
        }
      }
    }
  }
};
