const COMMON = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArraybuffer: 'readonly',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};

const JS = {
  ...COMMON,
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 0,
    'react/prop-types': 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
  },
};

const TS = {
  ...COMMON,
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'react/jsx-props-no-spreading': 0,
    'no-plusplus': 0,
    'react/prop-types': 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
  },
};

export default Object.freeze({
  TS,
  JS,
});
