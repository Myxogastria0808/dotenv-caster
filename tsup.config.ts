import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts', '!src/**/*.test.ts'],
    format: ['esm', 'cjs'],
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
    target: 'es2024',
  },
]);
