const chai = require("chai");
const assert = chai.assert;

const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word[1]);

describe("#map", () => {
  it("should return ['g', 'c', 't', 'm', 't'] for results1", () => {
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
  it("should return ['r', 'o', 'o', 'a', 'o'] for results2", () => {
    assert.deepEqual(results2, ["r", "o", "o", "a", "o"]);
  });
});
