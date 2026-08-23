/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F4EF',
        ink: {
          DEFAULT: '#18160F',
          soft: '#3A3730',
          muted: '#6E6A60',
          faint: '#9B968A',
        },
        line: '#E3DFD3',
        'line-soft': '#EDEAE0',
        accent: {
          DEFAULT: '#1B5E56',
          dark: '#12433D',
          light: '#E7F0EE',
        },
        success: '#2C7A46',
        error: '#B3261E',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        // Scaled up by 1.25x to recreate the 125% zoom layout natively
        content: '1300px',
      },
      fontSize: {
        // Scaled up custom headings proportionately 
        h1: ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h1-mobile': ['2.375rem', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
      },
      boxShadow: {
        tool: '0 1px 2px rgba(24, 22, 15, 0.04), 0 8px 24px rgba(24, 22, 15, 0.05)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 220ms ease-out',
        spin: 'spin 0.7s linear infinite',
      },
    },
  },
  plugins: [],
}