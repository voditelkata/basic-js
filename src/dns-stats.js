const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let arr = domains
    .map((item) => item.split(".").reverse())
    .map((item) => item.map((item) => `.${item}`));
  for (let i = 0; i < arr.length; i++) {
    let result = "";
    for (let j = 0; j < arr[i].length; j++) {
      result += arr[i][j];
      obj.hasOwnProperty(result) ? obj[result]++ : (obj[result] = 1);
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
