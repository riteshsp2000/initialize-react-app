const COMMON_PACKAGE = [
  'eslint',
  'eslint-config',
  'eslint-config-airbnb',
  'eslint-config-prettier',
  'eslint-plugin-import',
  'eslint-plugin-jest',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-prettier',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'eslint-plugin-testing-library',
];

const TS_PACKAGES = [
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint-config-airbnb-typescript',
];

export default Object.freeze({
  TS: [...COMMON_PACKAGE, ...TS_PACKAGES],
  JS: [...COMMON_PACKAGE],
});
