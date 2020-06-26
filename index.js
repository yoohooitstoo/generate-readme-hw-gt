// array of questions for user
const fs = require("fs");
const inquirer =  require('inquirer');
const genrateMarkdown = require("./utils/generateMarkdown.js");
const Choices = require("inquirer/lib/objects/choices");

//
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },
  {
      type: "input",
      message: "Give a description about your project.",
      name: "description"
    },
    {
      type: "input",
      message: "Whteps required to install your project?",
      name: "installation"
    },
    {
      type: "input",
      message: "How does one use the project?",
      name: "Usage"
    },
    {
      type: "input",
      message: "Who are the contributors to this project",
      name: "credit"
    },
    {
      type: "list",
      message: "Which license would like to include?",
      name: "license",
      choices: [{
          name:"MIT License",
          value: {
              badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
              description:"Copyright (c) <2020Permission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the 'Software'), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software isfurnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in allcopies or substantial portions of the Software.THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
          }
      },  
      {
        name: "IBM License",
       value: {
           badge: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
           description: "This site contains IBM's License Information (LI) documents, which provide information and any additional terms specific to a Program which applies to certain software announced or released after May, 1999. The Programs listed in the LI are licensed under those LI terms and conditions in addition to the Program license terms previously agreed to by Client and IBM. If Client does not have previously agreed to license terms in effect for the Program, either the International Program License Agreement or the International License Agreement for Non-Warranted Programs as identified in the LI applies. These documents are for your reference and viewing convenience. They are normally provided with IBM software in hardcopy form, on a CD, or are embedded in the software in softcopy form for acceptance prior to installation or first use of the software.",
       },
        },
    ]
    },
    {
      type: "input",
      message: "",
      name: "contributions"
    },
    {
      type: "input",
      message: "How does someone ",
      name: "tests"
    },
    {
        type: "input",
        message: "Please include your GitHub email.",
        name: "email"
      },
];

inquirer.prompt(questions).then(answers => {
    console.log(answers);
    fs.writeFile("newREADME.md", genrateMarkdown(answers), function(err) {
        
       if (err) {
         return console.log(err);
       }
       console.log("success")
    })
    });
// function to write README file
// function writeToFile(newReadMe, data) {
// }

// // function to initialize program
// function init() {


// }

// // function call to initialize program
// init();
