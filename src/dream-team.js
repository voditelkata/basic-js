const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(names) {
  var cleanNames = [];
  var firstLetter = [];
  
  for (let i = 0; i < names.length; i++) {
    if (typeof names[i] == "string") {
      cleanNames.push(names[i]);
    }
    else {
      return false;
    }
  }
  
  for (let i = 0; i < cleanNames.length; i++) {  
    return firstLetter.push(cleanNames[i].slice(0, 1).toUpperCase());
  }
};

