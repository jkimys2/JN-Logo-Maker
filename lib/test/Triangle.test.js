const Triangle = require("../Triangle");

describe("Triangle", () => {
  it("should render a triangle in a yellow color", () => {
    const triangle = new Triangle();
    triangle.setColor("yellow");
    expect(triangle.render()).toEqual(
      '<polygon points="50 15, 100 100, 0 100" fill="yellow"/>'
    );
  });
});
