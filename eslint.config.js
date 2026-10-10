import antfu from '@antfu/eslint-config'

export default await antfu(
  {
    astro: true,
    ignores: [
      '**/build/**',
      '**/dist/**',
      '**/dev-dist/**',
      '**/node_modules/**',
      '**/.astro/**',
      // TODO: check why README.md:L53 and CONTRIBUTING:L20 are failing
      'README.md',
      'CONTRIBUTING.md',
    ],
  },
  {
    files: ['pnpm-workspace.yaml'],
    rules: {
      // Keep dependency trust policy separate from formatting rules.
      'pnpm/yaml-enforce-settings': 'off',
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      // The unused-imports rule misclassifies references in JavaScript with ESLint 10.
      'unused-imports/no-unused-vars': 'off',
      'no-unused-vars': 'error',
    },
  },
  {
    files: ['**/*.md/*.*'],
    rules: {
      'ts/no-this-alias': 'off',
      'ts/no-unused-vars': 'off',
      'n/handle-callback-err': 'off',
      'no-restricted-syntax': 'off',
      'no-labels': 'off',
    },
  },
  {
    files: [
      '**/*.ts',
    ],
    rules: {
      'ts/no-unused-vars': 'off',
    },
  },
  {
    files: [
      '**/*.astro',
    ],
    rules: {
      'no-undef': 'off',
      'style/jsx-tag-spacing': 'off',
    },
  },
)
