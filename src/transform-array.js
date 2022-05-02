const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  console.log(arr);
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length == 0) return arr;
  let result = [];
  let copy = arr.slice();
  copy.forEach((item, i) => {
    if (
      item !== "--discard-next" &&
      item !== "--discard-prev" &&
      item !== "--double-next" &&
      item !== "--double-prev"
    ) {
      result.push(item);
    } else if (
      item == "--discard-prev" &&
      i != 0 &&
      copy[i - 1] != "--discard-next"
    ) {
      result.pop();
    } else if (item == "--discard-next" && i != arr.length - 1) {
      copy.splice(i + 1, 1);
    } else if (item == "--double-next" && i != arr.length - 1) {
      result.push(copy[i + 1]);
    } else if (
      item == "--double-prev" &&
      i != 0 &&
      copy[i - 1] != "--discard-next"
    ) {
      result.push(copy[i - 1]);
    }
  });
  return result;
}

module.exports = {
  transform,
};
