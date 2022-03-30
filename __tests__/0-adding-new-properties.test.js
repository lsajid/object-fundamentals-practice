const {
  addCuteProperty,
  addInputtedProperty,
  addAnyProperty,
} = require("../src/0-adding-new-properties");

describe("addCuteProperty()", () => {
  test("should add a 'cute: true' property to the inputted object.", () => {
    expect(addCuteProperty({})).toEqual({ cute: true });
    expect(addCuteProperty({ hi: "hello" })).toEqual({
      hi: "hello",
      cute: true,
    });
  });
});

describe("addInputtedProperty()", () => {
  test("should add a new property to the inputted object based on the arguments passed in.", () => {
    expect(addInputtedProperty({}, "test", "test")).toEqual({ test: "test" });
    expect(addInputtedProperty({ hi: "hello" }, "yes", true)).toEqual({
      hi: "hello",
      yes: true,
    });
  });
});

describe("addAnyProperty()", () => {
  test("should add any new property to the inputted object.", () => {
    expect(Object.keys(addAnyProperty({})).length).toEqual(1);
    expect(
      Object.keys(addAnyProperty({ oakdjljds: true, sndflksdf: "ljadfd" }))
        .length
    ).toEqual(3);
  });
});
