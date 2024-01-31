// import triangle file
const Triangle = require("../Triangle");

// test triangle to make sure render() method returns a yellow color
describe("Triangle", () => {
  it("should render a triangle in a yellow color", () => {
    const triangle = new Triangle("LOL", "black", "yellow");
    expect(triangle.render())
      .toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <polygon points="150 0, 220 100, 10 200" fill="yellow"/>
      <text x="150" y="90" font-size="45" text-anchor="middle" fill="black">LOL</text>
    </svg>`);
  });
});
