# Good-ReadMe-generator

![GitHub last commit](https://img.shields.io/github/last-commit/fbabauta/Good-ReadMe-generator)

## Description
Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. The user is first prompted to answer questions about their project that are essential to any README. Since not all projects require the same kind of README, the user is then given a choice of other sections they would like to include based on the need of their project. Optional sections include: License, Installation, Credits, Contribution, and Tests. Based on this answer, they are then prompted with follow up questions. After the last question is answered, their README.md file is generated and they can add it to their project repository. Check out the ExampleREADME.md in this repo as an example. 

## Table of Contents
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Methodology](#methodology)
  - [License](#license)
  - [Credits](#credits)
  - [Questions](#questions)

## Usage

* Instructions and examples for use:*


When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and uses axios to fetch your GitHub profile from the GitHub API, including your GitHub profile picture (avatar) and email. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README). The README will also include badges for your GitHub repo.

## Technologies
* JavaScript
* Node.js
* Axios
* npm
* Inquirer.js

![GitHub top language](https://img.shields.io/github/languages/top/fbabauta/Good-ReadMe-generator)


## Installation
*Steps required to install project and how to get the development environment running:*

To generate your own README, first run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:
  * [`inquirer`](https://www.npmjs.com/package/inquirer) that will prompt you for your inputs from the command line 
  * [`axios`](https://www.npmjs.com/package/axios) to fetch your info from the GitHub API

The application itself can be invoked with `node index.js`.

## Methodology

The application utilizes modularization by separating the GitHub API call and generation of the markdown into separate modules: `api.js` and `generateMarkdown.js`, respectively, inside the `utils` folder.

The application also utilizes, as much as possible, syntax and paradigms introduced in ES6 and beyond, including `arrow functions`, `const`, `let`, template literals, and `async/await` to handle the `inquirer`, `axios`, and `fs.writeFile` promises.

## License
This project is licensed under the MIT license.

## Credits
* [Shields.io](https://github.com/badges/shields)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)
* [Axios](https://github.com/axios/axios)

## Questions
If you have any questions about the repo, feel free to contact me:

via GitHub: [@fbabauta](https://api.github.com/users/fbabauta) | via Email: francine.babauta@outlook.com

![user image](https://avatars1.githubusercontent.com/u/70370805?s=460&u=1cd11eb811c3ac3a5d189a21702c464e28dbc8bf&v=4)