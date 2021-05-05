import inquirer from 'inquirer';
import IDefaultAnswers from './interfaces/defaultAnswers';

const configureManualSetup = (): Promise<IDefaultAnswers> =>
  inquirer.prompt([
    {
      type: 'list',
      message: '📦 Pick the package manager:',
      name: 'pkgManager',
      choices: ['npm', 'yarn'],
    },
    {
      type: 'list',
      message: '📦 Do you want to answer package manager questions?',
      name: 'pkgQuestions',
      choices: ['Go with defaults', 'Answer questions'],
    },
    {
      type: 'confirm',
      message: '🤓 Will you use TypeScript?',
      name: 'typeScript',
      default: false,
    },
    {
      type: 'checkbox',
      message: '⚙️  Pick the config:',
      name: 'extraLibs',
      choices: [
        'ESLint',
        'Prettier',
        'dotenv',
        'nodemon or ts-node-dev',
        'Unit Tests',
      ],
    },
    {
      type: 'checkbox',
      message: '🎀 Pick the additional options:',
      name: 'extraOptions',
      choices: ['git', 'LICENSE', 'README'],
    },
    {
      type: 'input',
      message: `🏫 Enter your GitHub or GitLab username`,
      name: 'platformUsername',
      when(allAnswers): boolean {
        return allAnswers.extraOptions.includes('git');
      },
    },
    {
      type: 'input',
      message: '🏫 Enter your repository name',
      name: 'repositoryName',
      when(allAnswers): boolean {
        return allAnswers.extraOptions.includes('git');
      },
    },
    {
      type: 'list',
      message: '📜 Choose the License type',
      name: 'licenseType',
      choices: ['MIT', 'Apache-2.0', 'BSD-3-Clause', 'ISC', 'GPL-3.0'],
      when(allAnswers): boolean {
        return allAnswers.extraOptions.includes('LICENSE');
      },
    },
    {
      type: 'input',
      message: '📜 Enter your name for the License',
      name: 'licenseAuthor',
      when(allAnswers): boolean {
        return allAnswers.extraOptions.includes('LICENSE');
      },
    },
  ]);

export default configureManualSetup;
