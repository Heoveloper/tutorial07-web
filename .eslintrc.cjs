const OFF = 0;
const WARN = 1;
const ERROR = 2;

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', 'react-hooks', '@typescript-eslint', 'import'],
  rules: {
    /** @link https://nextjs.org/docs/messages/google-font-display */
    '@next/next/google-font-display': OFF,
    /** @link https://nextjs.org/docs/messages/google-font-preconnect */
    '@next/next/google-font-preconnect': OFF,
    /** @link https://typescript-eslint.io/rules/ban-ts-comment */
    '@typescript-eslint/ban-ts-comment': OFF,
    /** @link https://typescript-eslint.io/rules/ban-types */
    '@typescript-eslint/ban-types': [
      ERROR,
      {
        types: {
          '{}': false,
        },
      },
    ],
    /** @link https://typescript-eslint.io/rules/consistent-type-exports */
    '@typescript-eslint/consistent-type-imports': WARN,
    /** @link https://typescript-eslint.io/rules/explicit-function-return-type */
    '@typescript-eslint/explicit-function-return-type': OFF,
    /** @link https://typescript-eslint.io/rules/explicit-module-boundary-types */
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    /** @link https://typescript-eslint.io/rules/no-empty-function */
    '@typescript-eslint/no-empty-function': WARN,
    /** @link https://typescript-eslint.io/rules/no-empty-interface */
    '@typescript-eslint/no-empty-interface': OFF,
    /** @link https://typescript-eslint.io/rules/no-explicit-any */
    '@typescript-eslint/no-explicit-any': OFF,
    /** @link https://typescript-eslint.io/rules/no-unused-vars */
    '@typescript-eslint/no-unused-vars': [
      WARN,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    /** @link https://eslint.org/docs/latest/rules/array-callback-return */
    'array-callback-return': [
      WARN,
      {
        allowImplicit: false,
      },
    ],
    /** @link https://eslint.org/docs/latest/rules/eqeqeq#rule-details */
    eqeqeq: WARN,
    /** @link https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/first.md */
    'import/first': WARN,
    /** @link https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md */
    'import/no-anonymous-default-export': [WARN, { allowObject: true }],
    /** @link https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md */
    'import/no-duplicates': WARN,
    /** @link https://eslint.org/docs/latest/rules/no-console#rule-details */
    'no-console': OFF,
    /** @link https://eslint.org/docs/latest/rules/no-multi-assign#rule-details */
    'no-multi-assign': WARN,
    /** @link https://eslint.org/docs/latest/rules/no-unneeded-ternary#rule-details */
    'no-unneeded-ternary': WARN,
    /** disable for @typescript-eslint/no-empty-function */
    'no-empty-function': OFF,
    /** disable for @typescript-eslint/no-unused-vars */
    'no-unused-vars': OFF,
    /** @link https://eslint.org/docs/latest/rules/object-shorthand.html */
    'object-shorthand': WARN,
    /** @link https://eslint.org/docs/latest/rules/prefer-const */
    'prefer-const': WARN,
    /** @link https://eslint.org/docs/latest/rules/prefer-destructuring#rule-details */
    'prefer-destructuring': [
      WARN,
      {
        array: false,
      },
    ],
    'prettier/prettier': [
      WARN,
      // 'error',
      // {
      //   endOfLine: 'auto',
      // },
    ],
    /** @link https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-brace-presence.md */
    'react/jsx-curly-brace-presence': [WARN, { props: 'never', children: 'never' }],
    /** @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md */
    'react/self-closing-comp': WARN,
    /** @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md */
    'react/react-in-jsx-scope': OFF,
    /** @link https://eslint.org/docs/latest/rules/spaced-comment */
    'spaced-comment': [
      WARN,
      {
        markers: ['/'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
