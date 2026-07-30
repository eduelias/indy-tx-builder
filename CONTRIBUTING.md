# Contributing to indy-tx-builder

Thanks for your interest in improving the project! This document explains how
to get set up and what we expect from contributions.

## Ground rules

- Keep the library **dependency-free at runtime**. Tooling (TypeScript, Jest,
  linters) lives in `devDependencies`; PRs that add runtime dependencies need a
  very good reason.
- Every transaction type code must match what
  [Hyperledger Indy](https://www.hyperledger.org/projects/hyperledger-indy)
  actually uses on the wire — cite the indy-node source or docs in your PR when
  adding or changing codes.
- This is an unofficial community project. Contributions must not present it as
  affiliated with or endorsed by the Linux Foundation or the Hyperledger
  Foundation.

## Development setup

```bash
git clone https://github.com/eduelias/indy-tx-builder.git
cd indy-tx-builder
npm install
npm run build   # compiles TypeScript to dist/
npm test        # runs Jest with coverage
```

> Note: Jest is wired up (`npm test` runs `jest --coverage`) but the repository
> has **no test files yet** — adding the first ones is a very welcome
> contribution.

## Making changes

1. Create a branch: `git checkout -b feat/short-description`.
2. Write code **and tests** where practical. New helpers and transaction types
   should be covered.
3. Make sure `npm run build` compiles cleanly.
4. Follow the existing style — the repo ships `tslint.json` (with the Prettier
   plugin) and `.prettierrc.json`; keep your editor pointed at them.
5. Keep commits focused with a clear message.
6. Open a pull request against `master`.

## Project layout

- `src/index.ts` — the default export (`{ types, helpers }`).
- `src/tx-types/` — transaction type enums: `read.ts` for `GET_*` requests,
  `write.ts` merging the per-ledger enums in `per-ledger/` (domain, pool,
  config).
- `src/helpers/` — `getTypeByNumber`, the code-to-name reverse lookup.
- `src/roles.ts` — Indy NYM role codes (not yet re-exported from the index).

## Reporting bugs / requesting features

Open an issue with your Node.js and TypeScript versions and, for wrong or
missing transaction codes, a pointer to the relevant indy-node source or
documentation.
