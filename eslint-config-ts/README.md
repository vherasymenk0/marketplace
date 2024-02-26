# Readme

## Development

This package provides `eslint` and `prettier` configurations.

The naming convention for eslint plugins requires the package to be named per this convention: `@namespace/eslint-config-****`.

Base configuration is `airbnb-base, eslint, security, prettier`.

**Note:** Order matters: tyically `airbnb` first (adds a lot of strict rules) and standards + prettier next (resets some sanity and makes sure prettier rules rule).

Overrides (based on file patterns):

- Typescript + `typescript` parser + `airbnb, prettier (again), @typescript-eslint`
- React + `airbnb/hooks + prettier/react + react + react-hooks + jsx-a11y`
- Tests + `jest`
- Docs + less strict
- MDX: `eslint-mdx` parser + `typescript, react, mdx`

**WIP**: `plugin:@typescript-eslint/recommended-requiring-type-checking` later (and only for production code, not tests and stories)

## Dependencies

Only `eslint` and `prettier` are declared in the root `package.json`.

Apart from those, all parsers, plugins, and extended configs are declared here as `dependencies`.
