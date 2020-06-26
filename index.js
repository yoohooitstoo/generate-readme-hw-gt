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
      message: "Would like to include a license?",
      name: "license",
      choices: [{
          name:"MIT License",
          value: {
              badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
              description:"",
          }
      }]
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
