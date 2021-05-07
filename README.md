# initialize-react-app

<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">initialize-react-app</h3>

  <!-- <p align="center">
    A cli to configure and create a react-app
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p> -->
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      </ul>
        <li><a href="#built-with">Built With</a></li>
        <!-- <li><a href="#configuration">Configuration</a></li> -->
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#installation">Contribution guidlines</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Initialize React App is a cli tool to generate and configure a react project
easily with 0 configuration. Out of the box it supports creat-react-app,
Next.js, Gatsby and Custom React Config along with suport for typescript.
Following are the features that this cli can configure:

- Support for Create React App, Next.js, Gatsby, Custom React Config
- 0 config setup for ESLint, Prettier.
- Code easily with either Typescript of Javascript.
- Well organized directory structure.
- Setup custom hooks.
- Options to add Github Actions, License (License Type)

A list of commonly used resources that I find helpful are listed in the
acknowledgements.

### Built With

Following technologies are libraries are used for the development of this
project.

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [ORM](https://www.npmjs.com/package/orm)
- [Create React App](https://create-react-app.dev/)
- [Next.js](https://nextjs.org/)
- [Gatsby](https://www.gatsbyjs.com/)

## Usage

- Run the following command to initialize the cli `npx initialize-react-app`
- You'll be prompted to select a framework or custom webpack setup.
- After that proceed by entering the project name.
- If you plan to configure the project manually, you'll be prompted with a list
  of different questions.

<!-- GETTING STARTED -->

## Getting Started

To setup the project locally follow the steps below

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)

  ```sh
  # Homebrew
  brew install nodejs

  # Sudo apt
  sudo apt install nodejs

  # Packman
  pacman -S nodejs

  # Module Install
  dnf module install nodejs:<stream> # stream is the version

  # Windows (chocolaty)
  cinst nodejs.install

  ```

- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

```sh
  npm install --global yarn
```

- [Git](https://git-scm.com/downloads)

```sh
  # Homebrew
  brew install git

  # Sudo apt
  apt-get install git

  # Packman
  pacman -S git

  # Module Install (Fedora)
  dnf install git

```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/riteshsp2000/initialize-react-app.git
   ```
2. Install dependencies
   ```sh
   # Please use yarn over npm
   yarn install
   ```
3. Start the project
   ```sh
   yarn develop
   ```
