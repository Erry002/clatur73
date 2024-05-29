/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          display: 'Alata, sans-serif', // Adds a new `font-display` class
          'alata':['"Alata"']
        },
        colors: {
          customCheckboxChecked: '#4CAF50', // colore per il checkbox selezionato
          customCheckboxUnchecked: '#E53E3E', // colore per il checkbox non selezionato
        }
      },
    },
    darkMode: "class",
    plugins: [],
  
    
  }
  