const Square = require("../Square");

describe("Square", () => {
  it("should render a square in a green color", () => {
    const square = new Square("OK", "red", "green");
    expect(square.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <rect width="100" height="100" fill="green"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">OK</text>
    </svg>`
    );
  });
});
