const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  let result =[];
  if(!Array.isArray(members)) return false; 
  members.map(item => {
    if(typeof item  === 'string'&& item !=='number'&& item !==''&& item !==null){
    let nameArr= item.replace(/\s/g, '').split('');
    result.push(nameArr[0].toUpperCase());  
    } 
  })
return result.sort().join('');
};
