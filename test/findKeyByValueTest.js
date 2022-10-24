const chai = require("chai");
const assert = chai.assert;

const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
const test1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
const test2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
const test3 = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");

describe("#findKeyByValue", () => {
  it("should return 'drama'' for test1", () => {
    assert.strictEqual(test1, "drama");
  });
  it("should return undefined for test2", () => {
    assert.isUndefined(test2);
  });
  it("should return 'comedy' for test3", () => {
    assert.strictEqual(test3, "comedy");
  });
});
