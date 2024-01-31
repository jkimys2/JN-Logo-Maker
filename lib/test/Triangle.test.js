const Triangle = require("../Triangle");

describe("Triangle", () => {
  it("should render a triangle in a yellow color", () => {
    const triangle = new Triangle("LOL", "black", "yellow");
    expect(triangle.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      <polygon points="50 15, 100 100, 0 100" fill="yellow"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">LOL</text>
      </svg>`
    );
  });
});
