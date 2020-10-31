const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

 constructor(mode = true) {
    this.mode = mode;
    
  }
 
  encrypt(message, key) {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    message = message.toUpperCase();
    let resCode = [];
    let keys = key.toUpperCase();
    let j = 0;
    if (!this.mode) {message = message.split("").reverse()};
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        let index =
          (alphabet.indexOf(message[i]) + alphabet.indexOf(keys[j])) % 26;
        let tmp = alphabet[index];
        resCode.push(tmp);
        j++;
        if (j == keys.length) j = 0;
      } else resCode.push(message[i]);
    }
    return resCode.join("");
  }

  decrypt(message, key) {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    message = message.toUpperCase();
    let resCode = [];
    let keys = key.toUpperCase();
    let j = 0;
    if (!this.mode) message = message.split("").reverse();

    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        let index =
          (alphabet.indexOf(message[i]) - alphabet.indexOf(keys[j]) + 26) % 26;
        let tmp = alphabet[index];
        resCode.push(tmp);
        j++;
        if (j == keys.length) j = 0;
      } else resCode.push(message[i]);
    }
    return resCode.join("");
  }

  
}

module.exports = VigenereCipheringMachine;

