import IDefaultAnswers from './interfaces/defaultAnswers';

export const DEFAULT_PRESETS = {
  JS_NPM: 'Default (Javascript, npm, ESLint, Prettier, Jest)',
  JS_YRN: 'Default (Javascript, yarn, ESLint, Prettier, Jest)',
  TS_NPM: 'Default (Javascript, yarn, ESLint, Prettier, Jest)',
  TS_YRN: 'Default (Javascript, yarn, ESLint, Prettier, Jest)',
  MANUAL: 'Manually Configure',
};

export const FRAMEWORKS = {
  CRA: 'Create React App',
  NEXT: 'Next.js',
  GATSBY: 'Gatsby',
  CUSTOM: 'Custom Webpack Config',
};

export const defaultAnswers: IDefaultAnswers = {
  framework: 'Create React App',
  pkgManager: 'yarn',
  pkgQuestions: 'Go with defaults',
  typescript: true,
  extraLibs: ['ESLint', 'Prettier', 'dotenv', 'nodemon', 'Unit Tests'],
  extraOptions: ['git', 'LICENSE', 'README'],
  platformUsername: 'riteshsp2000',
  repositoryName: 'generate-react-app',
  licenseType: 'MIT',
  licenseAuthor: 'Ritesh Patil',
};
