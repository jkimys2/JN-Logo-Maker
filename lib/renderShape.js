// import files
const Circle = require("./Circle");
const Square = require("./Square");
const Triangle = require("./Triangle");

// function to render shape for logo.svg
function renderShape(data) {
  if (data.shape === "Circle") {
    return new Circle(data.text, data.textColor, data.shapeColor).render();
  } else if (data.shape === "Square") {
    return new Square(data.text, data.textColor, data.shapeColor).render();
  } else {
    return new Triangle(data.text, data.textColor, data.shapeColor).render();
  }
}

// export renderShape
module.exports = renderShape;
