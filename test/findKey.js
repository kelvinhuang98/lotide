const chai = require("chai");
const assert = chai.assert;

const findKey = require("../findKey");
const test1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 4
);
const test2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 3
);
const test3 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

describe("#findKey", () => {
  it("should return undefined for test1", () => {
    assert.strictEqual(test1, undefined);
  });
  it("should return 'Akaleri' for test2", () => {
    assert.strictEqual(test2, "Akaleri");
  });
  it("should return 'noma' for test3", () => {
    assert.strictEqual(test3, "noma");
  });
});
