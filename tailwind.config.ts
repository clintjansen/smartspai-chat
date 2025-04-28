import type { Config } from 'tailwindcss'
export default {
  // prefix: 'sc-',
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in forwards',
      },
    },
  },
} satisfies Config
