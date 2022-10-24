const chai = require("chai");
const assert = chai.assert;

const flatten = require("../flatten");
describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [1] for [1]", () => {
    assert.deepEqual(flatten([1]), [1]);
  });
  it("should return [1, 2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);
  });
  it("should return [1, 2, 3, 4, 5, 6] for [[1], [2, 3], [4, 5, 6]]", () => {
    assert.deepEqual(flatten([[1], [2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
  });
});
