/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./index.html",
    ],
    theme: {
      extend: {
        colors: {
          // Core neutrals
          "neutral-light": "#f7f3ec",
          "neutral-warm": "#ede8de",    // warm panels / backgrounds
  
          // Main text
          "slate-dark": "#43414f",      // body text
  
          // Greens / teals
          "teal-green": "#275b52",      // hero H1, CTAs
          "teal-dark": "#275B52",       // icons, borders, accents
          sage: "#a7b3a7",              // dividers, badges
          "sage-grey": "#a7b3a7",       // for text-sage-grey / border-sage-grey
  
          // Browns / earth tones
          "earth-brown": "#6D4F2C",     // icons, headings, chips
          sepia: "#a05c3b",             // warm brown accent
          rust: "#a05c3b",              // pricing / "Best value" card text
          "rust-dark": "#a05c3b",       // "Best Value" pill & icons
  
          // Purples / mauves
          mauve: "#925781",             // CHLOE & some CTAs
          purple: "#925781",            // for text-purple / border-purple
  
          // Gold / highlights
          golden: "#deb065",            // vertical rules, small accents
        },
        fontFamily: {
          playfair: ['"Playfair Display"', 'serif'],
          roboto: ['Roboto', 'system-ui', 'sans-serif'],
          cormorant: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
          'roboto-mono': ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        },
      },
    },
    plugins: [],    
  };