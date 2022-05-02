const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  let separator = "";
  let add = "";
  let addition;
  let additionRepeatTimes = 1;
  options.hasOwnProperty("separator")
    ? (separator = options.separator)
    : (separator = "+");
  options.hasOwnProperty("additionSeparator")
    ? (additionSeparator = options.additionSeparator)
    : (additionSeparator = "|");
  options.hasOwnProperty("additionRepeatTimes")
    ? (additionRepeatTimes = options.additionRepeatTimes)
    : (additionRepeatTimes = 1);
  options.hasOwnProperty("addition")
    ? (addition = options.addition)
    : (addition = "");
  add = Array(additionRepeatTimes)
    .fill(String(addition))
    .join(additionSeparator);
  let arr = Array(options.repeatTimes).fill(str);
  result = arr.map((item) => item + add).join(separator);
  return result;
}

module.exports = {
  repeater,
};
