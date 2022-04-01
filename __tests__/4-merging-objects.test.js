const {
  combineUsingSpread,
  combineUsingAssign,
} = require("../src/4-merging-objects");

describe("combineUsingSpread()", () => {
  test("should use the spread operator.", () => {
    expect(/\.\.\./.test(combineUsingSpread.toString())).toBe(true);
  });
  test("should merge the two inputted objects into a new object.", () => {
    expect(combineUsingSpread({ a: "b" }, { c: "d" })).toEqual({
      a: "b",
      c: "d",
    });
  });
});

describe("combineUsingAssign()", () => {
  test("should use Object.assign().", () => {
    expect(/Object\.assign/.test(combineUsingAssign.toString())).toBe(true);
  });
  test("should merge the two inputted objects into a new object.", () => {
    expect(combineUsingAssign({ a: "b" }, { c: "d" })).toEqual({
      a: "b",
      c: "d",
    });
  });
});
