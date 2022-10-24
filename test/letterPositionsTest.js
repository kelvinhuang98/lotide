const chai = require("chai");
const assert = chai.assert;

const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    });
  });
  it("should return { h: [ 0 ], i: [1] } for 'hi'", () => {
    assert.deepEqual(letterPositions("hi"), { h: [0], i: [1] });
  });
  it("should return { b: [ 0 ], y: [1], e: [2] } for 'bye'", () => {
    assert.deepEqual(letterPositions("bye"), { b: [0], y: [1], e: [2] });
  });
});
