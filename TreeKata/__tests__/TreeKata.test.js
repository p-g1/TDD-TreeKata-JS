const Tree = require("../TreeKata.js");
require("jest-each");

describe("TreeKata", () => {
  test.each`
    input                                                     | expectedResult
    ${"TRUE"}                                                 | ${true}
    ${"FALSE"}                                                | ${false}
    ${"NOT TRUE"}                                             | ${false}
    ${"NOT FALSE"}                                            | ${true}
    ${"TRUE AND FALSE"}                                       | ${false}
    ${"FALSE AND FALSE"}                                      | ${false}
    ${"TRUE AND TRUE"}                                        | ${true}
    ${"TRUE OR FALSE"}                                        | ${true}
    ${"FALSE OR FALSE"}                                       | ${false}
    ${"TRUE OR TRUE"}                                         | ${true}
    ${"TRUE OR TRUE OR TRUE AND FALSE"}                       | ${true}
    ${"TRUE OR FALSE AND NOT FALSE"}                          | ${true}
    ${"NOT FALSE AND TRUE AND FALSE"}                         | ${false}
    ${"NOT FALSE AND TRUE AND NOT TRUE OR NOT FALSE OR TRUE"} | ${true}
    ${"(NOT FALSE)"}                                          | ${true}
    ${"(NOT FALSE) AND TRUE AND (TRUE OR FALSE)"}             | ${true}
    ${"NOT (TRUE AND TRUE)"}                                  | ${false}
    ${"(TRUE OR TRUE OR TRUE) AND FALSE"}                     | ${false}
    ${"(TRUE OR TRUE OR FALSE) AND FALSE"}                    | ${false}
    ${"(TRUE AND TRUE AND FALSE) AND FALSE"}                  | ${false}
    ${"(TRUE AND TRUE AND TRUE) OR FALSE"}                    | ${true}
  `(
    "should calculate boolean of $expectedResult from $input",
    ({ input, expectedResult }) => {
      expect(Tree.Calculator(input)).toBe(expectedResult);
    }
  );
});
