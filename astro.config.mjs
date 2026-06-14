// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://ashkasimov.com',
  image: {
    // Allow remote placeholder images during development.
    domains: ['picsum.photos', 'images.unsplash.com'],
  },
});
