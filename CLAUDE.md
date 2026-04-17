# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

dotenv-caster is a TypeScript library that converts `string | undefined` (from `process.env`) to specific primitive types. It provides a `DotEnvCaster` class with 6 cast methods: `castString`, `castNumber`, `castBigInt`, `castSymbol`, `castBoolean`, `castNull`.

## Commands

- **Build:** `pnpm run build` (uses tsup, outputs ESM + CJS to `dist/`)
- **Test:** `pnpm run test` (vitest with `--typecheck`)
- **Test with coverage:** `pnpm run coverage`
- **Test with UI:** `pnpm run ui`
- **Run a single test:** `pnpm vitest run --typecheck -t "test name pattern"`
- **Generate docs:** `pnpm run typedoc`
- **Format:** Prettier (config in `.prettierrc`)

Package manager is **pnpm** (v10.33.0). Nix flake provides the dev shell (nodejs + corepack).

## Architecture

Single-package library (not a monorepo).

- `src/index.ts` — barrel export
- `src/lib/DotEnvCaster.ts` — the entire library implementation: a stateless class with 6 methods that validate and convert `string | undefined` to primitives, throwing descriptive errors on undefined or invalid input
- `src/lib/DotEnvCaster.test.ts` — comprehensive test suite (uses `.env` file for test data via dotenv)
- `tsup.config.ts` — dual-format build (ESM `.mjs` + CJS `.js` with source maps and `.d.ts`)
- `vitest.config.ts` — test config with v8 coverage and HTML reporters

## CI/CD

GitHub Actions runs tests via Nix dev shell on push to main and PRs. A separate workflow builds TypeDoc, Vitest UI reports, and coverage, then deploys to GitHub Pages.
