import fs from 'fs';
import inquirer from 'inquirer';

// Types + Constants
import {DEFAULT_PRESETS, FRAMEWORKS} from './constants';
import IPreset from './interfaces/preset';

const configurePresetSetup = (): Promise<IPreset> =>
  inquirer.prompt([
    {
      type: 'list',
      message: 'Pick the Preset',
      name: 'preset',
      choices: [
        DEFAULT_PRESETS.JS_NPM,
        DEFAULT_PRESETS.JS_YRN,
        DEFAULT_PRESETS.TS_NPM,
        DEFAULT_PRESETS.TS_YRN,
        DEFAULT_PRESETS.MANUAL,
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

export default configurePresetSetup;
