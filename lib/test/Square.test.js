const Square = require("../Square");

describe("Square", () => {
  it("should render a square in a green color", () => {
    const square = new Square();
    square.setColor("green");
    expect(Sqaure.render()).toEqual(
      '<rect width="50" height="50" fill="green"/>'
    );
  });
});
