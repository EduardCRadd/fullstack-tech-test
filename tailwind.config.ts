import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        text: '#E2E2E2',
        tertiary: '#1A1A1A',
      },
    },
  },
  plugins: [],
}

export default config
