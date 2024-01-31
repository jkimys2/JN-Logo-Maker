const Shape = require("./Shape");

function Circle(text, textColor, shapeColor) {
  Shape.render(text, textColor, shapeColor);
  `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
}

module.exports = Circle;
