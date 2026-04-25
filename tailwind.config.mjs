import typography from '@tailwindcss/typography';

const rgb = (v) => `rgb(${v} / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: rgb('var(--color-bg)'),
          elevated: rgb('var(--color-bg-elevated)'),
          subtle: rgb('var(--color-bg-subtle)'),
        },
        fg: {
          DEFAULT: rgb('var(--color-fg)'),
          muted: rgb('var(--color-fg-muted)'),
          subtle: rgb('var(--color-fg-subtle)'),
        },
        border: {
          DEFAULT: rgb('var(--color-border)'),
          strong: rgb('var(--color-border-strong)'),
        },
        accent: {
          DEFAULT: rgb('var(--color-accent)'),
          hover: rgb('var(--color-accent-hover)'),
        },
      },
      fontFamily: {
        sans: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
      },
      maxWidth: {
        content: '42rem',
        prose: '44rem',
        wide: '72rem',
      },
    },
  },
  plugins: [typography],
};
