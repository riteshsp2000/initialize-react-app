interface IDefaultAnswers {
  framework:
    | 'Create React App'
    | 'Next.js'
    | 'Gatsby'
    | 'Custom Webpack Config';
  pkgManager: 'yarn' | 'npm';
  pkgQuestions: 'Go with defaults' | 'Answer questions';
  repositoryName: string;
  typescript: boolean;
  extraLibs: ('ESLint' | 'Prettier' | 'dotenv' | 'nodemon' | 'Unit Tests')[];
  extraOptions: ('git' | 'LICENSE' | 'README')[];
  platformUsername: string;
  licenseType: 'MIT' | 'Apache-2.0' | 'DSC-3-Clause' | 'ISC' | 'GPL-3.0';
  licenseAuthor: string;
}

export default IDefaultAnswers;
