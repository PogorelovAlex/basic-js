const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ){
  let t ;
  if (typeof sampleActivity  === 'string'&&!isNaN(sampleActivity) && 0<sampleActivity<15 && typeof sampleActivity  === 'number') {
  let k = 0.693/HALF_LIFE_PERIOD;
  let ln = Math.log(MODERN_ACTIVITY/sampleActivity)/k;
  t = Math.ceil(ln);
  }else{return false};
  return t;
}
