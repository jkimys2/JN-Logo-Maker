# JN-Logo-Maker

## Description

Through this project, I was able to create a logo generator. Once in the integrated terminal, users are prompted a series of questions in order to create their own logo! This challenge was completed by following the acceptance criterias listed below:

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

This project was completed with Node.js, Inquirer, and Jest. It was created in order to help generate logos for those in need. Inquirer is needed to generate the logo by asking the user to answer the prompts. By following the prompts, users are able to generate a logo with the text, shape, and colors of their liking! Jest is used in this app in order to run tests on the different shape classes.  An example logo is available for viewing in the output folder.

This project did not come with any starter code. Everything in this app was built from scratch!

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [Links](#links)

## Installation

In order to make your own logo, you will need the following:

- Visual Studio Code <br>
- Node.js <br>
- And you will need to install the dependencies in the package.json file!


## Usage

Once you have the files in VS Code, you will need to install the dependencies (Inquirer for creating the logo and Jest for testing).

In order to make your own logo, you will need to open the integrated terminal. From there, you will type ```node index.js``` to start making your logo. Once you do so, it will ask you a series of questions. You will be able to choose the text you want in the logo, the color of that text, the shape of your logo, as well as the color of your logo! Once you go through all of the prompts, your new logo will be created in the output folder!

You can read more on how to run the tests in the [Tests](#tests) section!

<br>
Here is a snippet on how this logo maker works:

![gif](./assets/logo-maker.gif)

You can view the full demonstration [here](https://drive.google.com/file/d/14asAfEvsOS4YVkq9Y0PFY3WUeTzmDaSC/view)!


## Tests

There are three test files included in this application. They are:
- Circle.test.js <br>
- Square.test.js <br>
- Triangle.test.js <br>

<br>
Steps to run tests:

- Open the integrated terminal <br>
- Run the tests by typing in ```npm run test```
- Wait for the tests to finish running <br>
- Once the tests are complete, it will state whether the tests have failed or passed

You will see that, when running the tests in this app, they all pass!


## Credits

Thank you Andrew B., Chris B., and Michael H. for all your help! 😊👍


## Links

[GitHub Repository](https://github.com/jkimys2/JN-Logo-Maker)