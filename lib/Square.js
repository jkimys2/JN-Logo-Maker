// import shape file
const Shape = require("./Shape");

// new class Square which inherited the Shape class
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <rect x="50" y="0" width="120" height="120" fill="${this.shapeColor}"/>
      <text x="110" y="80" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

// export square
module.exports = Square;