export default interface IPreset {
  preset:
    | 'Default (Javascript, npm, ESLint, Prettier, Jest)'
    | 'Default (Javascript, yarn, ESLint, Prettier, Jest)'
    | 'Default (Javascript, yarn, ESLint, Prettier, Jest)'
    | 'Default (Javascript, yarn, ESLint, Prettier, Jest)'
    | 'Manually Configure';
  framework:
    | 'Create React App'
    | 'Next.js'
    | 'Gatsby'
    | 'Custom Webpack Config';
  projectName: string;
}
