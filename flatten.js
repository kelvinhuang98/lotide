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

const flatten = function (array) {
  let emptyArray = [];
  for (const element of array) {
    if (!Array.isArray(element)) {
      emptyArray.push(element);
    } else if (Array.isArray(element)) {
      for (let value of element) {
        emptyArray.push(value);
      }
    }
  }
  return emptyArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
