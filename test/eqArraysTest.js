const chai = require("chai");
const assert = chai.assert;

const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should return true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("should return false for ([1, 2, 3], [3, 2, 1])", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it(`should return true for (["1", "2", "3"], ["1", "2", "3"])`, () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  it(`should return false for (["1", "2", "3"], ["1", "2", 3])`, () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
  it("should return true for ([[2, 3], [4]], [[2, 3], [4]])", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it(`should return false for (nested1, nested2)`, () => {
    assert.isFalse(
      eqArrays(
        [[2, 3], [4]],
        [
          [2, 3],
          [4, 5],
        ]
      )
    );
  });
  it("should return false for ([[2, 3], [4]], [[2, 3], 4])", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
});
