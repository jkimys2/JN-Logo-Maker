// import square file
const Square = require("../Square");

// test square to make sure render() method returns the specified color
describe("Square", () => {
  it("should render a square in a green color", () => {
    const square = new Square("OK", "red", "green");
    expect(square.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <rect x="50" y="0" width="120" height="120" fill="green"/>
      <text x="110" y="80" font-size="50" text-anchor="middle" fill="red">OK</text>
    </svg>`
    );
  });
});
