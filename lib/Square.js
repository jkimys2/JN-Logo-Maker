const Shape = require("./Shape");

// new class Square which inherited the Shape class
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <rect x="150" y="70" width="100" height="100" fill="${this.shapeColor}"/>
      <text x="150" y="75" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}
