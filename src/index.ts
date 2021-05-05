import fs from 'fs';
import inquirer from 'inquirer';

// Utils.
import configureManualSetup from './manualConfig';

const DEFAULT_PRESETS = {
  JS_NPM: 'Default (Javascript, npm, ESLint, Prettier, Jest)',
  JS_YRN: 'Default (Javascript, yarn, ESLint, Prettier, Jest)',
  TS_NPM: 'Default (Javascript, yarn, ESLint, Prettier, Jest)',
  TS_YRN: 'Default (Javascript, yarn, ESLint, Prettier, Jest)',
};

const FRAMEWORKS = {
  CRA: 'Create React App',
  NEXT: 'Next.js',
  GATSBY: 'Gatsby',
  CUSTOM: 'Custom Webpack Config',
};

const initialize = async () => {
  const presetsAnswer = await inquirer.prompt([
    {
      type: 'list',
      message: 'Pick the Preset',
      name: 'preset',
      choices: [
        DEFAULT_PRESETS.JS_NPM,
        DEFAULT_PRESETS.JS_YRN,
        DEFAULT_PRESETS.TS_NPM,
        DEFAULT_PRESETS.TS_YRN,
        'Manually Configure',
      ],
    },
    {
      type: 'list',
      message: 'Pick the framework',
      name: 'framework',
      choices: [
        FRAMEWORKS.CRA,
        FRAMEWORKS.NEXT,
        FRAMEWORKS.GATSBY,
        FRAMEWORKS.CUSTOM,
      ],
    },
    {
      type: 'input',
      message: 'Enter project name: ',
      name: 'projectName',
      validate(value: string): boolean | string {
        const folderRules = new RegExp('^[a-z0-9\\_\\-]+$');

        if (fs.existsSync(value)) return '📁 Directory already exists!';

        if (
          value.startsWith('_') ||
          value.startsWith('-') ||
          value.endsWith('_') ||
          value.endsWith('-')
        )
          return '❌ Do not start or end with _ , -';

        if (!value.match(folderRules))
          return '❌ Folder name can only contain Letters, Numbers, - and _';

        return true;
      },
    },
  ]);

  const {preset} = presetsAnswer;

  if (preset === DEFAULT_PRESETS.JS_NPM) {
    // TODO:
  } else if (preset === DEFAULT_PRESETS.JS_YRN) {
    // TODO:
  } else if (preset === DEFAULT_PRESETS.TS_NPM) {
    // TODO:
  } else if (preset === DEFAULT_PRESETS.TS_YRN) {
    // TODO:
  } else {
    const answers = await configureManualSetup();
    console.log(answers);
  }
};

initialize();
