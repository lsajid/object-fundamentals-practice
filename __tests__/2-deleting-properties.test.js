const {
  deleteSprinklesProperty,
  deleteInputtedProperty,
  deleteAnyProperty,
} = require("../src/2-deleting-properties");

describe("deleteSprinklesProperty()", () => {
  test("should delete the 'sprinkles' property on a given object.", () => {
    expect(deleteSprinklesProperty({ sprinkles: false })).toEqual({});
    expect(deleteSprinklesProperty({ hi: "hello", sprinkles: false })).toEqual({
      hi: "hello",
    });
  });
});

describe("deleteInputtedProperty()", () => {
  test("should delete an existing property from the inputted object based on the arguments passed in.", () => {
    expect(deleteInputtedProperty({ test: "not test" }, "test")).toEqual({});
    expect(deleteInputtedProperty({ hi: "hello", yes: false }, "yes")).toEqual({
      hi: "hello",
    });
  });
});

describe("deleteAnyProperty()", () => {
  test("should delete a property on the inputted object.", () => {
    expect(
      Object.keys(
        deleteAnyProperty({
          cakeFlavor: "tres leches",
          frostingFlavor: "dulce de leche",
          topping: "strawberries",
          shape: "in a jar",
        })
      ).length
    ).toEqual(3);
    expect(
      Object.keys(
        deleteAnyProperty({
          cakeFlavor: "carrot",
          frostingFlavor: "cream cheese",
          topping: "candied ginger",
          shape: "square",
          decoration: "little buttercream carrots :)",
        })
      ).length
    ).toEqual(4);
  });
});
