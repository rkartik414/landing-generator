/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './output/**/*.{jsx,html}',
    './ui/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        accent:  'var(--accent)',
        primary: 'var(--primary)',
        surface: 'var(--bodyBg)'
      },
      borderRadius: {
        xl:  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      }
    }
  },
  plugins: []
}
