export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
      colors: { bg: '#0b0f17', panel: '#121826', line: '#222c3f', accent: '#38bdf8', gold: '#fbbf24' },
    },
  },
  plugins: [],
}
