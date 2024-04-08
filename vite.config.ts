/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { coverageConfigDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'src/main.ts',
        'src/**/index.ts',
        'src/**/*.types.ts',
      ],
    },
  },
});
