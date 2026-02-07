import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'bounce-fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(-2px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'jiggle': {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'translateX(-2px)',
          },
          '75%': {
            transform: 'translateX(2px)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'bounce-fade-in': 'bounce-fade-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'jiggle': 'jiggle 0.4s ease-in-out',
      },
      animationDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      animationDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '1000': '1000ms',
      },
    },
  },
} satisfies Config;
