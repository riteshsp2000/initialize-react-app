"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const inquirer_1 = __importDefault(require("inquirer"));
const manualConfig_1 = __importDefault(require("./manualConfig"));
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
const initialize = () => __awaiter(void 0, void 0, void 0, function* () {
    const presetsAnswer = yield inquirer_1.default.prompt([
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
            validate(value) {
                const folderRules = new RegExp('^[a-z0-9\\_\\-]+$');
                if (fs_1.default.existsSync(value))
                    return '📁 Directory already exists!';
                if (value.startsWith('_') ||
                    value.startsWith('-') ||
                    value.endsWith('_') ||
                    value.endsWith('-'))
                    return '❌ Do not start or end with _ , -';
                if (!value.match(folderRules))
                    return '❌ Folder name can only contain Letters, Numbers, - and _';
                return true;
            },
        },
    ]);
    const { preset } = presetsAnswer;
    if (preset === DEFAULT_PRESETS.JS_NPM) {
    }
    else if (preset === DEFAULT_PRESETS.JS_YRN) {
    }
    else if (preset === DEFAULT_PRESETS.TS_NPM) {
    }
    else if (preset === DEFAULT_PRESETS.TS_YRN) {
    }
    else {
        const answers = yield manualConfig_1.default();
        console.log(answers);
    }
});
initialize();
//# sourceMappingURL=index.js.map