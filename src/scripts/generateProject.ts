/* eslint-disable no-console */
import {execSync} from 'child_process';

// Types
import IDefaultAnswers from '../interfaces/defaultAnswers';

const generateProject = async ({
  framework,
  repositoryName,
  typescript,
}: IDefaultAnswers): Promise<void> => {
  if (framework === 'Create React App') {
    const isTypescrit = typescript ? '--template typescript' : '';
    execSync(`yarn create-react-app ${repositoryName} ${isTypescrit}`, {
      stdio: 'ignore',
    });
  } else if (framework === 'Next.js') {
    const command = typescript
      ? `npx create-next-app ${repositoryName} --use-yarn --example "https://github.com/vercel/next-learn-starter/tree/master/typescript-final"`
      : `npx create-next-app ${repositoryName} --use-yarn --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"`;
    execSync(command, {stdio: 'ignore'});
  } else if (framework === 'Gatsby') {
    const command = `yarn gatsby new ${repositoryName}`;
    execSync(command, {stdio: 'ignore'});
  } else if (framework === 'Custom Webpack Config') {
    console.log('hello');
  }
};

export default generateProject;
