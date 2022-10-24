const chai = require("chai");
const assert = chai.assert;

const eqObjects = require("../eqObjects");

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("should return true for (ab, ba)", () => {
    assert.isTrue(eqObjects(ab, ba));
  });
  it("should return false for (ab, abc)", () => {
    assert.isFalse(eqObjects(ab, abc));
  });
  it("should return true for (cd, cd)", () => {
    assert.isTrue(eqObjects(cd, dc));
  });
  it("should return false for (cd, cd2)", () => {
    assert.isFalse(eqObjects(cd, cd2));
  });
  it("should return true for ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it("should return false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.isFalse(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })
    );
  });
  it("should return false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});
