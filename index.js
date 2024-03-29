// packages required for this application
const inquirer = require("inquirer");
const fs = require("fs");
const renderShape = require("./lib/renderShape");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter 1-3 characters for your logo!",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You must type in 1-3 characters!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a text color or hexadecimal number:",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please choose a color!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Please choose a shape:",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color (or hexadecimal number) for your logo shape!",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please choose a color!");
        return false;
      }
    },
  },
];

// function to create a new file with logo
function writeToFile(data) {
  fs.writeFile("./output/logo.svg", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Generated logo.svg in the output folder!");
    }
  });
}

// function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// function call to initialize app
init()
  .then((data) => {
    return renderShape(data);
  })
  .then((data) => {
    return writeToFile(data);
  })
  .catch((err) => {
    console.log(err);
  });
