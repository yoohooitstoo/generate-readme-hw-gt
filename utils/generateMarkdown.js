// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

${answers.license.badge}

## Description

${answers.description}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.credit}

## Contributing

${answers.contributions}

## Tests

${answers.tests}

## Questions

If you have any question or suggestion, please you can reach by sending email to ${answers.email}.
To see the additional work that I have done please visit me at http://gitgub.com/${answers.username}.

## License

${answers.license.description}
`;
}
// module.exports is an object we use to store variables or methods
module.exports = generateMarkdown;
