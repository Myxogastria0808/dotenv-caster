import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // @vitest/coverage-v8
    coverage: {
      enabled: true,
      reporter: ['html'],
      exclude: [
        '.direnv/**/*',
        '.github/**/*',
        '.vscode/**/*',
        'coverage/**/*',
        'dist/**/*',
        'html/**/*',
        'docs/**/*',
        'node_modules/**/*',
        '.envrc',
        '.gitignore',
        '.npmignore',
        '.prettierrc',
        'flake.lock',
        'flake.nix',
        'LICENSE',
        'package-lock.json',
        'package.json',
        'README.md',
        'renovate.json',
        'tsconfig.json',
        'typedoc.json',
        'vitest.config.ts',
      ],
    },
    // @vitest/ui
    reporters: ['default', 'html'],
  },
});
