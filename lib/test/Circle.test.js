const Circle = require("../Circle");

// test circle to make sure render() method returns the specified color
describe("Circle", () => {
  it("should render a circle in a blue color", () => {
    expect(shape.render()).toEqual(
      '<circle cx="25" cy="75" r="20" stroke="red" fill="blue" stroke-width="5"/>'
    );
  });
});
