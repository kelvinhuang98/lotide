const tail = function (array) {
  let emptyArray = [];
  for (let i = 1; i < array.length; i++) {
    emptyArray.push(array[i]);
  }
  return emptyArray;
};

module.exports = tail;
