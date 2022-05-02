const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str.length) return str;
  let a = str.match(/(.)\1*/g);
  return a
    .map((item) => {
      if (item.length > 1) {
        return item.length + item[0];
      }
      return item;
    })
    .join("");
}

module.exports = {
  encodeLine,
};
