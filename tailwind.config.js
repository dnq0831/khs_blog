/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "secondary-container": "#14d1ff",
              "background": "#10131a",
              "inverse-surface": "#e1e2eb",
              "primary-fixed-dim": "#00e38a",
              "on-surface": "#e1e2eb",
              "outline-variant": "#3b4b3f",
              "surface-container-lowest": "#0b0e14",
              "outline": "#849587",
              "error-container": "#93000a",
              "on-tertiary-fixed": "#231b00",
              "tertiary-fixed": "#ffe17a",
              "error": "#ffb4ab",
              "secondary-fixed": "#b7eaff",
              "inverse-on-surface": "#2e3037",
              "surface-variant": "#32353c",
              "surface-tint": "#00e38a",
              "surface-container-high": "#272a31",
              "on-secondary-fixed-variant": "#004e60",
              "tertiary": "#fffaff",
              "on-tertiary-fixed-variant": "#554500",
              "surface-container-low": "#191c22",
              "surface-container": "#1d2026",
              "on-tertiary": "#3b2f00",
              "on-secondary": "#003543",
              "on-primary-fixed": "#002110",
              "surface-dim": "#10131a",
              "surface-bright": "#363940",
              "surface": "#10131a",
              "primary": "#f3fff3",
              "on-primary": "#00391f",
              "on-surface-variant": "#b9cbbc",
              "on-secondary-container": "#00566b",
              "on-primary-fixed-variant": "#00522f",
              "on-background": "#e1e2eb",
              "secondary": "#a6e6ff",
              "on-primary-container": "#007142",
              "on-secondary-fixed": "#001f28",
              "inverse-primary": "#006d40",
              "tertiary-fixed-dim": "#e4c44f",
              "secondary-fixed-dim": "#4cd6ff",
              "on-tertiary-container": "#766000",
              "tertiary-container": "#ffdd65",
              "primary-fixed": "#56ffa7",
              "on-error-container": "#ffdad6",
              "surface-container-highest": "#32353c",
              "primary-container": "#00ff9c",
              "on-error": "#690005"
          },
          "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
          },
          "fontFamily": {
              "headline": ["Space Grotesk", "sans-serif"],
              "body": ["Manrope", "sans-serif"],
              "label": ["Space Grotesk", "monospace"],
              "mono": ["JetBrains Mono", "monospace"]
          }
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
