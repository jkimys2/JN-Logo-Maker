const Circle = require("../Circle");

// test circle to make sure render() method returns the specified color
describe("Circle", () => {
  it("should render a circle in a blue color", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(
      '<circle r="50" fill="blue"/>'
    );
  });
});
