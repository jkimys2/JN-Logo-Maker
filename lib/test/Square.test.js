const Square = require("../Square");

describe("Square", () => {
  it("should render a square in a green color", () => {
    const square = new Square();
    square.setColor("green");
    expect(Sqaure.render()).toEqual(
      '<rect width="100" height="100" fill="green"/>'
    );
  });
});
