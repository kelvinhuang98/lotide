const chai = require("chai");
const assert = chai.assert;

const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("should return { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    });
  });
  it("should return { l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 } for 'lighthouse labs'", () => {
    assert.deepEqual(countLetters("lighthouse labs"), {
      l: 2,
      i: 1,
      g: 1,
      h: 2,
      t: 1,
      o: 1,
      u: 1,
      s: 2,
      e: 1,
      a: 1,
      b: 1,
    });
  });
});
