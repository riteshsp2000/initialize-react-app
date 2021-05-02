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
const inquirer_1 = __importDefault(require("inquirer"));
const initialize = () => __awaiter(void 0, void 0, void 0, function* () {
    const presetsAnswer = yield inquirer_1.default.prompt([
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
    }
    else {
        console.log(presetsAnswer.preset);
    }
});
initialize();
//# sourceMappingURL=index.js.map