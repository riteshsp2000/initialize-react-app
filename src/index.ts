import inquirer from 'inquirer';

const initialize = async () => {
  const presetsAnswer = await inquirer.prompt([
    {
      type: 'list',
      message: 'Pick the Preset',
      name: 'preset',
      choices: [
        'Default (Javascript, npm, ESLint, Prettier, Jest)',
        'Default (Javascript, yarn, ESLint, Prettier, Jest)',
        'Default (Typescript, npm, ESLint, Prettier, Jest)',
        'Default (Typescript, yarn, ESLint, Prettier, Jest)',
        'Manually Configure',
      ],
    },
  ]);

  if (presetsAnswer.preset === 'Manually Configure') {
    console.log('Manually Configure');
  } else {
    console.log(presetsAnswer.preset);
  }
};

initialize();
