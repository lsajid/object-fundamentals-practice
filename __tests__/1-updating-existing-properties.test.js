const {
  updateVisitedProperty,
  updateInputtedProperty,
  updateAnyProperty,
} = require("../src/1-updating-existing-properties");

describe("updateVisitedProperty()", () => {
  test("should update the 'visited' property on a given object to be true.", () => {
    expect(updateVisitedProperty({ visited: false })).toEqual({
      visited: true,
    });
    expect(updateVisitedProperty({ hi: "hello", visited: false })).toEqual({
      hi: "hello",
      visited: true,
    });
  });
});

describe("updateInputtedProperty()", () => {
  test("should update an existing property to the inputted object based on the arguments passed in.", () => {
    expect(
      updateInputtedProperty({ test: "not test" }, "test", "test")
    ).toEqual({ test: "test" });
    expect(
      updateInputtedProperty({ hi: "hello", yes: false }, "yes", true)
    ).toEqual({
      hi: "hello",
      yes: true,
    });
  });
});

describe("updateAnyProperty()", () => {
  test("should update any key/value pair on the inputted object.", () => {
    expect(typeof updateAnyProperty({})).toBe("object");
    expect(
      updateAnyProperty({
        name: "Los Angeles",
        state: "California",
        population: 3_967_000,
        sizeInSqMiles: 503,
      })
    ).not.toEqual({
      name: "Los Angeles",
      state: "California",
      population: 3_967_000,
      sizeInSqMiles: 503,
    });
    expect(
      updateAnyProperty({
        name: "Miami",
        state: "Florida",
        population: 454_279,
        sizeInSqMiles: 55.25,
      })
    ).not.toEqual({
      name: "Miami",
      state: "Florida",
      population: 454_279,
      sizeInSqMiles: 55.25,
    });
  });
});
