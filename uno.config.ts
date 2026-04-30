import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
    presetWebFonts({
      fonts: {
        pixel: 'Press Start 2P:400,700',
      }
    })
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#CA8A04',
        light: '#EAB308',
        dark: '#A16207',
      },
      success: '#22C55E',
      warning: '#F59E0B',
      error: '#EF4444',
    }
  },
  shortcuts: {
    'pixel-btn': 'px-4 py-2 bg-primary text-white rounded-sm hover:bg-primary-dark transition-colors cursor-pointer',
    'section-container': 'max-w-6xl mx-auto px-4 py-8',
  }
})