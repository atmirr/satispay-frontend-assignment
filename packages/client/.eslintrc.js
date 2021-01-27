module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'react-hooks', 'jest'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    'no-case-declarations': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-else-return': 'warn',
    'no-param-reassign': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-key': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/self-closing-comp': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
};
