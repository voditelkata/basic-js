const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let length = (n + "").split("").length;
  let result = [];
  for (let i = 0; i < length; i++) {
    let arr = (n + "").split("");
    arr.splice(i, 1);
    result.push(+arr.join(""));
  }
  return result.sort((a, b) => a - b)[result.length - 1];
}

module.exports = {
  deleteDigit,
};
