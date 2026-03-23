/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0F14',
        card: '#111827',
        'card-border': '#1F2937',
        'text-primary': '#F9FAFB',
        'text-secondary': '#9CA3AF',
        'text-muted': '#6B7280',
        brand: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
        },
        success: '#22C55E',
        error: '#EF4444',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#9CA3AF',
            h1: { color: '#F9FAFB', fontFamily: 'Syne' },
            h2: { color: '#F9FAFB', fontFamily: 'Syne' },
            h3: { color: '#F9FAFB', fontFamily: 'Syne' },
            h4: { color: '#F9FAFB', fontFamily: 'Syne' },
            strong: { color: '#F9FAFB' },
            a: { color: '#4F46E5' },
            code: { color: '#F9FAFB', backgroundColor: '#111827', padding: '2px 6px', borderRadius: '4px' },
            blockquote: { borderLeftColor: '#4F46E5', color: '#9CA3AF' },
          },
        },
      },
    },
  },
  plugins: [],
};
