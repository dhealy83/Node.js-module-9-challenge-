// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

inquirer
  .prompt([
    {
      type: "input",
      message: "Title",
      name: "Title",
    },
    {
      type: "input",
      message: "Description",
      name: "Description",
    },
    {
      type: "input",
      message: "URL Directory",
      name: "URLs",
    },
    {
      type: "input",
      message: "Usage",
      name: "Usage",
    },
    {
      type: "input",
      message: "GitHub URL?",
      name: "github",
    },
    {
      type: "input",
      message: "LinkedIn",
      name: "LinkedIn",
    },
  ])
  .then((data) => {
    console.log(data);
  });
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
//

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile("./index.html", genHTML(data), (err) =>
  err ? console.log(err) : console.log("success!")
);
function genHTML(data) {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <div>
          <h1>${data.userName}</h1>
              <p>${data.userName}</p>
          </div>
          <div>
          <h1></h1>
          <p>${data.city}</p>
          </div>
          <div>
          <h1></h1>
          <p>${data.bio}</p>
          </div>
          <div>
          <h1></h1>
          <p>${data.linkedin}</p>
          </div>
          <div>
          <h1></h1>
          <p>${data.github}</p>
          </div>
      </body>
      </html>`;
}
