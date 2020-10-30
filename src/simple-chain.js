const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  result:[],

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(String(value));
    return this;
    
  },
  removeLink(position) {
    if (Number.isInteger(position) && position >= 0 && position < this.result.length) 
     {
       this.result.splice(position-1,1);
       return this;
     }
     this.result = [];
     throw new Error();
   },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const finalResult = this.result.join(' )~~( ');
    this.result = [];
    return `( ${finalResult} )`;
  }
};

module.exports = chainMaker;
