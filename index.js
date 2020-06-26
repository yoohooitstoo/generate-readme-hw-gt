// array of questions for user
const fs = require("fs");
const inquirer =  require('inquirer');
const genrateMarkdown = require("./utils/generateMarkdown.js")

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
      message: "What are the steps required to install your project?",
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
      type: "confirm",
      message: "Would like to include a license?",
      name: "license"
    },
    {
      type: "input",
      message: "",
      name: "contributions"
    },
    {
      type: "input",
      message: "",
      name: "tests"
    },
];

// function to write README file
function writeToFile(newReadMe, data) {
}
 fs.writeFile("newREADME.md", JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }
 });
// function to initialize program
function init() {
    inquirer.prompt((questions)).then(response) =>

}

// function call to initialize program
init();
