# JN-Logo-Maker

## Description

Through this project, I was able to create a logo generator. Once in the integrated terminal, users are prompted a series of questions on how they would like their logo to appear. This challenge was completed by following the acceptance criterias listed below:

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

This project was completed with Node.js, Inquirer, and Jest. It was created in order to help generate logos for those in need. By following the prompts, users are able to generate a logo with the text, shape, and colors of their liking! An example logo is available for viewing in the output folder.

This project did not come with any starter code. Everything in this app was built from scratch!


## Installation

In order to make your own logo, you will need the following:

- Visual Studio Code <br>
- Node.js <br>
- And you will need to install the dependencies in the package.json file!


## Usage

Once you have the files in VS Code, you will need to install the dependencies (Inquirer and Jest). Once that is completed, you have the option to run tests on the shape classes. You can do so by opening in the integrated terminal and typing ```npm run test```. Then the terminal will state whether the tests have failed or passed. When you run the shape class tests, it will state that all 3 tests have passed!

In order to make your own logo, you will need to open the integrated terminal. From there, you will type ```node index.js```. Once you do so, it will ask you a series of questions. You will be able to choose the text you want in the logo, the color of that text, the shape of your logo, as well as the color of your logo! Once you go through all of the prompts, your new logo will be created in the output folder!

Here is a snippet on how this logo maker works:

You can view the full demonstration here:


## Credits

Thank you Andrew B., Chris B., and Michael H. for all your help! 😊👍


## Links

GitHub Repository: