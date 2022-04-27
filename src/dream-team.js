const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  let cleanNames = [];
  let firstLetter = [];

  if (!Array.isArray(names)) {
    return false;
  }

  names.forEach(function (item) {
    if (typeof item == "string") {
      cleanNames.push(item.trim());
    }
  });

  cleanNames.forEach((item) =>
    firstLetter.push(item.slice(0, 1).toUpperCase())
  );

  return firstLetter.sort().join("");
}

module.exports = {
  createDreamTeam,
};
