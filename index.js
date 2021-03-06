// fs is a Node standard library package for reading and writing files
const fs = require("fs");
//This allows for us to use the inquirer package
const inquirer = require("inquirer");
//This allows us to connect the two js files together
const genrateMarkdown = require("./utils/generateMarkdown.js");

//The questions that we want to prompt the user with
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a description about your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are th steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "How does one use the project?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who needs to be given credit on this project?",
    name: "credit",
  },
  {
    type: "list",
    message: "Which license would like to include?",
    name: "license",
    choices: [
      {
        name: "MIT License",
        value: {
          badge:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
          description:
            "Copyright (c) [2020] Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in allcopies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
        },
      },
      {
        name: "IBM License",
        value: {
          badge:
            "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
          description:
            "This site contains IBM's License Information (LI) documents, which provide information and any additional terms specific to a Program which applies to certain software announced or released after May, 1999. The Programs listed in the LI are licensed under those LI terms and conditions in addition to the Program license terms previously agreed to by Client and IBM. If Client does not have previously agreed to license terms in effect for the Program, either the International Program License Agreement or the International License Agreement for Non-Warranted Programs as identified in the LI applies. These documents are for your reference and viewing convenience. They are normally provided with IBM software in hardcopy form, on a CD, or are embedded in the software in softcopy form for acceptance prior to installation or first use of the software.",
        },
      },
    ],
  },
  {
    type: "input",
    message: "Please list any outside contributions.",
    name: "contributions",
  },
  {
    type: "input",
    message: "How does someone test the project?",
    name: "tests",
  },
  {
    type: "input",
    message: "Please include your GitHub email.",
    name: "email",
  },
  {
    type: "input",
    message: "Please include your GitHub username.",
    name: "email",
  },
];
// Using the inquirer package method to capture the answers from the questions 
// adding them to the generateMarkdwon.js and creating a newREADME.md with the correct information
inquirer.prompt(questions).then((answers) => {
  
  fs.writeFile("newREADME.md", genrateMarkdown(answers), function (err) {
    if (err) {
      return console.log(err);
    }
    
  });
});
