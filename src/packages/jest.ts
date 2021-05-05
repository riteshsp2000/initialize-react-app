const PACKAGES = [
  'jest',
  '@testing-library/react',
  '@testing-library/jest-dom',
  '@testing-library/user-event',
  'node-fetch',
];

const SCRIPTS = {
  test: 'jest',
  'test:watch': 'jest --watch',
  'test:coverage': 'jest --coverage',
};

const JEST = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/src/setupTests.js',
  ],
};

export default {
  PACKAGES,
  SCRIPTS,
  JEST,
};
