import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "4px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            "background": {
              "DEFAULT": "#FAFAFA"
            },
            "content1": {
              "DEFAULT": "#FFFFFF",
              "foreground": "#11181C"
            },
            "content2": {
              "DEFAULT": "#f4f4f5",
              "foreground": "#27272a"
            },
            "content3": {
              "DEFAULT": "#e4e4e7",
              "foreground": "#3f3f46"
            },
            "content4": {
              "DEFAULT": "#d4d4d8",
              "foreground": "#52525b"
            },
            "divider": {
              "DEFAULT": "rgba(17, 17, 17, 0.15)"
            },
            "focus": {
              "DEFAULT": "#000000"
            },
            "foreground": {
              "50": "#fafafa",
              "100": "#f4f4f5",
              "200": "#e4e4e7",
              "300": "#d4d4d8",
              "400": "#a1a1aa",
              "500": "#71717a",
              "600": "#52525b",
              "700": "#3f3f46",
              "800": "#27272a",
              "900": "#18181b",
              "DEFAULT": "#11181C"
            },
            "overlay": {
              "DEFAULT": "#000000"
            },
            "primary": {
              "50": "#e6f1fe",
              "100": "#cce3fd",
              "200": "#99c7fb",
              "300": "#66aaf9",
              "400": "#338ef7",
              "500": "#000000",
              "600": "#000000",
              "700": "#000000",
              "800": "#000000",
              "900": "#000000",
              "DEFAULT": "#000000",
              "foreground": "#fff"
            }
          }
        },
        dark: {
          colors: {
            "background": {
              "DEFAULT": "#000000"
            },
            "content1": {
              "DEFAULT": "#18181b",
              "foreground": "#fafafa"
            },
            "content2": {
              "DEFAULT": "#27272a",
              "foreground": "#f4f4f5"
            },
            "content3": {
              "DEFAULT": "#3f3f46",
              "foreground": "#e4e4e7"
            },
            "content4": {
              "DEFAULT": "#52525b",
              "foreground": "#d4d4d8"
            },
            "divider": {
              "DEFAULT": "rgba(255, 255, 255, 0.15)"
            },
            "focus": {
              "DEFAULT": "#ffffff"
            },
            "foreground": {
              "50": "#18181b",
              "100": "#27272a",
              "200": "#3f3f46",
              "300": "#52525b",
              "400": "#71717a",
              "500": "#a1a1aa",
              "600": "#d4d4d8",
              "700": "#e4e4e7",
              "800": "#f4f4f5",
              "900": "#fafafa",
              "DEFAULT": "#ECEDEE"
            },
            "overlay": {
              "DEFAULT": "#000000"
            },
            "primary": {
              "50": "#000000",
              "100": "#000000",
              "200": "#000000",
              "300": "#000000",
              "400": "#000000",
              "500": "#ffffff",
              "600": "#ffffff",
              "700": "#ffffff",
              "800": "#ffffff",
              "900": "#ffffff",
              "DEFAULT": "#ffffff",
              "foreground": "#000"
            }
          }
        }
      }
    })
  ]
}
