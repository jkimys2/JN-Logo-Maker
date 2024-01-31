const Circle = require("../Circle");

// test circle to make sure render() method returns the specified color
describe("Circle", () => {
  it("should render a circle in a blue color", () => {
    const circle = new Circle("HI", "white", "blue");
    expect(circle.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <circle cx="150" cy="100" r="80" fill="blue"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">HI</text>
    </svg>`
    );
  });
});
