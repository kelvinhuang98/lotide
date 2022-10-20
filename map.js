const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);

const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    } else {
      return true;
    }
  }
};

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅  Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

console.log(results1);

assertArraysEqual(results1, ["t", "c", "g", "m", "t"]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(["a", "d", "b", "c", "4"], results1);
