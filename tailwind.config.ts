import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 30px rgba(34, 211, 238, 0.3)'
      }
    }
  },
  plugins: []
};

export default config;
