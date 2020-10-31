const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes, separator ='+', addition = '', additionRepeatTimes, additionSeparator ='|'} = options

  let addElement = addition;
  let res='';

  for (let i=1; i<additionRepeatTimes; i++){
    addElement += `${additionSeparator}${addition}`
  }

  for (let i=1; i<repeatTimes; i++){
    res += `${separator}${str}${addElement}`
  }

  return `${str}${addElement}${res}`;

};
  