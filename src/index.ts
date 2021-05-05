import fs from 'fs';
import inquirer from 'inquirer';

// Utils.
import configureManualSetup from './manualConfig';

// Constants
import {DEFAULT_PRESETS, FRAMEWORKS, defaultAnswers} from './constants';

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

  const {preset, framework, projectName} = presetsAnswer;
  defaultAnswers.framework = framework;
  defaultAnswers.repositoryName = projectName;

  if (preset === DEFAULT_PRESETS.JS_NPM) {
    defaultAnswers.pkgManager = 'npm';
    defaultAnswers.typeScript = false;
  } else if (preset === DEFAULT_PRESETS.JS_YRN) {
    defaultAnswers.pkgManager = 'yarn';
    defaultAnswers.typeScript = false;
  } else if (preset === DEFAULT_PRESETS.TS_NPM) {
    defaultAnswers.pkgManager = 'npm';
  } else if (preset === DEFAULT_PRESETS.TS_YRN) {
    defaultAnswers.pkgManager = 'yarn';
  } else {
    const answers = await configureManualSetup();
    // eslint-disable-next-line no-console
    console.log(answers);
  }
};

initialize();
