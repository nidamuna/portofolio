/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      backgroundImage: {
        'hli-image': 'url("./assets/hli.png")',
        'mvn-image': 'url("./assets/mvn.png")',
        'jataka-image': 'url("./assets/jataka.png")',
        'digi-image': 'url("./assets/digismart.png")',
      },
    },
  },
  plugins: [],
}

