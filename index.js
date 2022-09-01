// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title for the repository? (Required)",
      name: "title",
    },
    {
      type: "input",
      message: "Description",
      name: "description",
    },
    {
      type: "input",
      message: "Installation",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
    },
    {
      type: "list",
      message: "License",
      name: "license",
      choices: ["Apache", "Boost", "Creative Commons"],
    },
    {
      type: "input",
      message: "Contributors",
      name: "contributors",
    },
    {
      type: "input",
      message: "Tests",
      name: "tests",
    },
    {
      type: "input",
      message: "URL Directory",
      name: "URLs",
    },
    {
      type: "input",
      message: "GitHub URL?",
      name: "github",
    },
    {
      type: "input",
      message: "LinkedIn",
      name: "linkedIn",
    },
  ])
  .then((data) => {
    const filename = `readme.md`;

    fs.writeFile("./gen-readme/mock.md", generateMarkDown(data), (err) =>
      err ? console.log(err) : console.log("success!")
    );
  });
