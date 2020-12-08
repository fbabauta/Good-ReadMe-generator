function generateMarkdown(userResponses, userInfo) {

  // Generate Table of Contents conditionally based on userResponses
  let draftToC = '## Table of Contents';
  
  if (userResponses.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (userResponses.test !== '') { draftToC += `
  * [Tests](#tests)` };


  // Generate markdown for the top requested portions of the README 
  let draftMarkdown =
  `# ${userResponses.title}

  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
 Check out the badges hosted by [shields.io](https://shields.io/).


## Description

*The what, why, and how:*

${userResponses.description}
  
`

// Add Table of Contents to markdown
draftMarkdown += draftToC;

// Add License section since License is required to Table of Contents
draftMarkdown += `
* [License](#license)`;


// Optional Installation section
if (userResponses.installation !== '') {

draftMarkdown +=
`

## Installation

*Steps required to install project and how to get the development environment running:*

${userResponses.installation}`
};


// Optional Usage section
if (userResponses.usage !== '') {

draftMarkdown +=

`

## Usage

*Instructions and examples for use:*

${userResponses.usage}`
};


// Optional Contributing section
if (userResponses.contributing !== '') {
`

## Contributing

*If you would like to contribute it, you can follow these guidelines on how to do so.*

${userResponses.contributing}`
};


// Optional Tests section
if (userResponses.tests !== '') {

draftMarkdown +=
`

## Tests

*Tests for application and how to run them:*

${userResponses.tests}`
};


// License section is required
draftMarkdown +=
`

## License

${user.Responses.license}
`;


// Questions / About Developer section
let draftDev =
`
---

## Questions?

If you have any questions about the repo, feel free to contact me:

GitHub: [@${userInfo.login}](${userInfo.url})
`;

![Developer Profile Picture](${ userInfo.avatar_url }) 
  
  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
  draftDev +=
  `

  Email: ${userInfo.email}

  `};

 // Add developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;

}

module.exports = generateMarkdown;
