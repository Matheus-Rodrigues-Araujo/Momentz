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
        customWhite: '#f8f8f8',
        transparentBlack: "rgba(0,0,0,0.8)",
        transparentWhite: "rgb(222 222 222 / 60%)",
        customGray: '#211E1F',
        customLightGray: '#8E8787',
        customYellow: '#EFD370',
        customBlue: '#0095F6',
        customLightBlue: '#70D8EF',
        customLighterBlue: '#00FFFF',
        customPurple: '#8D0164',
        customLightpink: '#fc49ae',
        customLighterPink: '#F1688E',
        customLightbrown: '#AD4965',
        customShadow: 'shadow-[0px_0px_4px_0px_black]',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
