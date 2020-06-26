// function to generate markdown for README

function generateMarkdown(answers) {
  return `# ${answers.title}
 
  
  ## Description
  ${answers.description}

  ## Table of Contents (Optional)

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${answers.installation}

  ## Usage 

  ${answers.usage}

  ## Credits

  ${answers.credit}

  ## License

  ${answers.license}

  ## Contributing

  ${answers.contributions}

  ## Tests

  ${answers.tests}

  ## Questions

  If you have any question or suggestion, please you can reach by sending email to ${answers.email}. 
  To see the additional work that I have done please visit me at http://gitgub.com/${answers.username}.
`;
}

module.exports = generateMarkdown;




Copyright (c) [2020][chea cliatt, scott griffin, stuart scott, volodymyr petrytsya]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.