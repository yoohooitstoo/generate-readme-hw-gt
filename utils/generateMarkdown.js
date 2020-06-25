// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  
  ## Description
  ${data.description}

  ## Table of Contents (Optional)

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Credits
  ${data.credit}
  ## License
  ${data.license}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ##Questions
  If you have any question or suggestion, please you can reach by sending email
`;
}

module.exports = generateMarkdown;
