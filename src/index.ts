/* eslint-disable no-console */

// Utils.
import configurePresetSetup from './presetConfig';
import configureManualSetup from './manualConfig';

// Constants
import {DEFAULT_PRESETS, defaultAnswers} from './constants';

const initialize = async () => {
  try {
    const presetsAnswer = await configurePresetSetup();

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
      try {
        const answers = await configureManualSetup();
        console.log(answers);
      } catch (error) {
        console.log('Manual Configuration Error: ', error);
      }
    }
  } catch (error) {
    console.log('Preset Configuration Error: ', error);
  }
};

initialize();
