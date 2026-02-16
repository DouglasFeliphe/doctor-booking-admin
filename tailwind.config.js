/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // Surface Colors
      surface: 'var(--color-surface)',
      'surface-raised': 'var(--color-surface-raised)',
      'surface-hover': 'var(--color-surface-hover)',

      // Primary
      primary: 'var(--color-primary)',
      'primary-hover': 'var(--color-primary-hover)',
      'primary-foreground': 'var(--color-primary-foreground)',

      // Secondary
      secondary: 'var(--color-secondary)',
      'secondary-hover': 'var(--color-secondary-hover)',
      'secondary-foreground': 'var(--color-secondary-foreground)',

      // Muted
      muted: 'var(--color-muted)',
      'muted-hover': 'var(--color-muted-hover)',
      'muted-foreground': 'var(--color-muted-foreground)',

      // Destructive
      destructive: 'var(--color-destructive)',
      'destructive-hover': 'var(--color-destructive-hover)',
      'destructive-foreground': 'var(--color-destructive-foreground)',

      // Foreground
      foreground: 'var(--color-foreground)',
      'foreground-subtle': 'var(--color-foreground-subtle)',
      'foreground-muted': 'var(--color-foreground-muted)',

      // Border
      border: 'var(--color-border)',
      'border-hover': 'var(--color-border-hover)',
      input: 'var(--color-input)',

      // Focus Ring
      ring: 'var(--color-ring)',
      'ring-offset': 'var(--color-ring-offset)',

      // Success
      success: 'var(--color-success)',
      'success-hover': 'var(--color-success-hover)',
      'success-foreground': 'var(--color-success-foreground)',

      // Warning
      warning: 'var(--color-warning)',
      'warning-hover': 'var(--color-warning-hover)',
      'warning-foreground': 'var(--color-warning-foreground)',

      // Info
      info: 'var(--color-info)',
      'info-hover': 'var(--color-info-hover)',
      'info-foreground': 'var(--color-info-foreground)',

      // Standard colors
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
    },
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

        // Border radius
        borderRadius: {
          none: '0',
          sm: '0.25rem',
          DEFAULT: '0.375rem',
          md: '0.5rem',
          lg: '0.75rem',
          xl: '1rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
          full: '9999px',
        },
      },
    },
  },
  plugins: [],
};
