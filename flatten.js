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

module.exports = flatten;
