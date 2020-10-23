const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count=0;
  let arr = [].concat(...matrix);

  for(let i=0;i<=arr.length-1;i++){
    
    if (arr[i]=='^^'){count=count+1;}
  }
return count;
}


