// import shape file
const Shape = require("./Shape");

// new class Triangle which inherited the Shape class
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super (text, textColor, shapeColor);
  };
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <polygon points="60 0, 120 100, 0 100" fill="${this.shapeColor}"/>
      <text x="60" y="85" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  };
};

// export triangle
module.exports = Triangle;
