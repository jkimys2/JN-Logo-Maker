const Shape = require("./Shape");

// new class Triangle which inherited the Shape class
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super (text, textColor, shapeColor);
  };
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <polygon points="150 0, 220 100, 10 200" fill="${this.shapeColor}"/>
      <text x="150" y="90" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  };
};

// export Triangle
module.exports = Triangle;
