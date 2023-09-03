const { writeFile } = require("fs");

function generateMarkdown(data) {
  let output = `
# ${data.title}
${data.license == 'None' ? '' : `![${data.license}](https://img.shields.io/badge/Lincense-${data.license}-blue)`}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Features](#features)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Lincese
${data.license}

## Tests
${data.test}

## Questions
If there are any questions of concerns, I can be reached at:
##### [github: ${data.github}](https://github.com/${data.github}})
##### [email: ${data.email}](mailto:${data.email})`;

  writeFile("dist/README.md", output, err => {
    if (err) throw err;
    console.log("dist/README.md created!");
  });
}

module.exports = generateMarkdown;
