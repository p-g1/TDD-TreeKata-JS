const Tree = require("../TreeKata.js");
require("jest-each");

describe("TreeKata", () => {
  test.each`
    input                | expectedResult
    ${"TRUE"}            | ${true}
    ${"FALSE"}           | ${false}
    ${"NOT TRUE"}        | ${false}
    ${"NOT FALSE"}       | ${true}
    ${"TRUE AND FALSE"}  | ${false}
    ${"FALSE AND FALSE"} | ${false}
    ${"TRUE AND TRUE"}   | ${true}

  `(
    "should calculate boolean of $expectedResult from $input",
    ({ input, expectedResult }) => {
      expect(Tree.Calculator(input)).toBe(expectedResult);
    }
  );
});
