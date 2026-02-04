/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      extend: {
        // Configurações adicionais que não estão no theme.css

        // Breakpoints customizados (se necessário)
        screens: {
          xs: '475px',
          // sm: '640px',  // default
          // md: '768px',  // default
          // lg: '1024px', // default
          // xl: '1280px', // default
          '2xl': '1400px',
        },

        // Animações customizadas
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
          'fade-in': {
            from: { opacity: '0' },
            to: { opacity: '1' },
          },
          'fade-out': {
            from: { opacity: '1' },
            to: { opacity: '0' },
          },
          'slide-in-from-top': {
            from: { transform: 'translateY(-100%)' },
            to: { transform: 'translateY(0)' },
          },
          'slide-in-from-bottom': {
            from: { transform: 'translateY(100%)' },
            to: { transform: 'translateY(0)' },
          },
          'slide-in-from-left': {
            from: { transform: 'translateX(-100%)' },
            to: { transform: 'translateX(0)' },
          },
          'slide-in-from-right': {
            from: { transform: 'translateX(100%)' },
            to: { transform: 'translateX(0)' },
          },
          spin: {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          'fade-in': 'fade-in 0.2s ease-out',
          'fade-out': 'fade-out 0.2s ease-out',
          'slide-in-from-top': 'slide-in-from-top 0.2s ease-out',
          'slide-in-from-bottom': 'slide-in-from-bottom 0.2s ease-out',
          'slide-in-from-left': 'slide-in-from-left 0.2s ease-out',
          'slide-in-from-right': 'slide-in-from-right 0.2s ease-out',
          'spin-slow': 'spin 3s linear infinite',
        },

        // Container customizado
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          },
          screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1400px',
          },
        },
      },
    },
  },
  plugins: [],
};
