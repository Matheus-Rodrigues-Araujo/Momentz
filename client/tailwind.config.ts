import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#0e0d0e',
        customGray: '#211E1F',
        customLightGray: '#8E8787',
        customYellow: '#EFD370',
        customLightBlue: '#70D8EF',
        customLighterBlue: '#00FFFF',
        customPurple: '#8D0164',
        customLightpink: '#fc49ae',
        customLighterPink: '#F1688E',
        customLightbrown: '#AD4965',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    ({ addUtilities }:any) => {
      const newUtilities = {
        '.clip-custom': {
          position: 'absolute',
          clip: 'rect(0px, 65px, 200px, 0px)',
          top: '1.25em',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
export default config
