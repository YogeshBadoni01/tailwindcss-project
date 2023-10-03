import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { 
                        transform: 'rotateX(-10deg)',
                        

                      },
          '50%': { transform: 'rotateX(10deg)' },
        }
      },

      animation :{
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}
export default config
