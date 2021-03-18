const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  var result = [].concat(...arr);
  let counter = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '^^') {
      counter += 1;
    }
  }
  return counter;
};
// countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]);


// var arr = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ];
// var result = [].concat(...arr);

// console.log(result);