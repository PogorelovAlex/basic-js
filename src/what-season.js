const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {

 if(!date){return 'Unable to determine the time of year!'}
  if (Object.prototype.toString.call(date)==='[object Date]'){
    let seasons = [ 'winter','spring', 'summer', 'autumn'];
    let monthOfDate = Math.floor((date.getMonth()+1)%12/3);
    return seasons[monthOfDate];}
  else { throw new Error()}
};
