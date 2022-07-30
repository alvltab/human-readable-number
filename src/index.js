module.exports = function toReadable (number) {
    number = `${number}`;
    const numwords = {
      units: {
        0: 'zero',
        1: 'one', 2: 'two', 3: 'three',
        4: 'four', 5: 'five', 6: 'six',
        7: 'seven', 8: 'eight', 9: 'nine'},
      teens: {
        11: 'eleven', 12: 'twelve', 13: 'thirteen',
        14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
        17: 'seventeen', 18: 'eighteen', 19: 'nineteen'},
      tys: {
        10: 'ten', 20: 'twenty', 30: 'thirty',
        40: 'forty', 50: 'fifty', 60: 'sixty',
        70: 'seventy', 80: 'eighty', 90: 'ninety'}
    }
    
    if (number.length === 1) {
      return numwords.units[+number];
    }
    
    if (number.length === 2) {
      if (number[1] === '0') {
        return numwords.tys[+number[0]*10];
      } else if (number[0] === '1') {
        return numwords.teens[+number];
      } else {
        return `${numwords.tys[+number[0]*10]} ${numwords.units[+number[1]]}`;
      }
    }
    
    if (number.length === 3) {
      if (number[1] === '0') {
        if (number[2] === '0') {
          return `${numwords.units[+number[0]]} hundred`;
        } else {
          return `${numwords.units[+number[0]]} hundred ${numwords.units[+number[2]]}`;
        }
      } else {
        if (number[2] === '0') {
          return `${numwords.units[+number[0]]} hundred ${numwords.tys[+number[1]*10]}`;
        } else if (number[1] === '1') {
          return `${numwords.units[+number[0]]} hundred ${numwords.teens[+number[1]+number[2]]}`;
        } else {
          return `${numwords.units[+number[0]]} hundred ${numwords.tys[+number[1]*10]} ${numwords.units[+number[2]]}`;
        }
      }
    }
  }
