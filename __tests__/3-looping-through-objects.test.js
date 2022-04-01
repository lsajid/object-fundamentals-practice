const {
  doubleBasedOnKey,
  deleteIfKeyContainsChar,
  markIfValueContainsChar,
} = require("../src/3-looping-through-objects");

describe("doubleBasedOnKey()", () => {
  test("should double the values of any property whose key starts with the letter 'c'.", () => {
    expect(doubleBasedOnKey({ dog: "steak", cat: "chicken" })).toEqual({
      dog: "steak",
      cat: "chickenchicken",
    });
    expect(
      doubleBasedOnKey({
        fish: 10,
        bunny: 2,
        capybara: 4,
      })
    ).toEqual({
      fish: 10,
      bunny: 2,
      capybara: 8,
    });
  });
});

describe("deleteIfKeyContainsChar()", () => {
  test("should delete an existing property on the inputted object if the key contains the inputted char.", () => {
    expect(
      deleteIfKeyContainsChar(
        { aardvark: "termites", donkey: "oat straw", parrot: "fruit" },
        "a"
      )
    ).toEqual({ donkey: "oat straw" });
    expect(
      deleteIfKeyContainsChar(
        {
          gerbil: "ice cream",
          ferret: "raw meat",
          cockatiel: "pellets",
        },
        "r"
      )
    ).toEqual({
      cockatiel: "pellets",
    });
  });
});

describe("markIfValueContainsChar()", () => {
  test("should add '!!!' to the end of any value that contains the inputted character.", () => {
    expect(
      markIfValueContainsChar(
        { aardvark: "termites", donkey: "oat straw", parrot: "fruit" },
        "a"
      )
    ).toEqual({
      aardvark: "termites",
      donkey: "oat straw!!!",
      parrot: "fruit",
    });
    expect(
      markIfValueContainsChar(
        {
          gerbil: "ice cream",
          ferret: "raw meat",
          cockatiel: "pellets",
        },
        "t"
      )
    ).toEqual({
      gerbil: "ice cream",
      ferret: "raw meat!!!",
      cockatiel: "pellets!!!",
    });
  });
});
