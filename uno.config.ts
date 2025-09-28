import { defineConfig, presetWebFonts } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      text: 'var(--my-color-text)',
      bg: 'var(--my-color-background)',
      primary: 'var(--my-color-primary)',
      surface: 'var(--my-color-surface)',
      divider: 'var(--my-color-divider)',
      success: 'var(--my-color-success)',
      error: 'var(--my-color-error)',
      disabled: 'var(--my-color-disabled)',
      on: {
        primary: 'var(--my-color-on-primary)',
        disabled: 'var(--my-color-on-disabled)',
      },
      secondary: {
        text: 'var(--my-color-secondary-text)',
      },
      input: {
        bg: 'var(--my-color-input-bg)',
        border: 'var(--my-color-input-border)',
      },
      stepper: {
        inactive: 'var(--my-color-stepper-inactive)',
        bg: 'var(--my-color-stepper-bg)',
        border: 'var(--my-color-stepper-border)',
      },
    },
    boxShadow: {
      soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
    },
  },
  shortcuts: [
    ['btn-primary', 'px-4 py-3 min-w-120px md:h-67px md:w-272px rounded-2 bg-primary flex justify-center items-center text-center fw-400 text-4 md:text-24px text-on-primary cursor-pointer active:op-85 disabled:bg-disabled disabled:text-on-disabled hover:scale-102 transition-all'],
  ],
  presents: [
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
})
