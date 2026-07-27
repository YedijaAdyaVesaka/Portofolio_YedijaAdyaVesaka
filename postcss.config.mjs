/** PostCSS pipeline: Tailwind first, then vendor prefixes. */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
