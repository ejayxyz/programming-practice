const pali = (str) => {
  var regexp = /[\W_]/g;
  str = str.toLowerCase().replace(regexp, '');
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const cezar = (str, int) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    if (word.match(/[a-z]/i)) {
      let number = str.charCodeAt(i);
      if (number >= 65 && number <= 90) {
        word = String.fromCharCode(((word - 65 + int) % 26) + 65);
      } else if (number >= 97 && number <= 122) {
        word = String.fromCharCode(((word - 97 + int) % 26) + 97);
      }
    }
    result += word;
  }
  return result;
};

let string = 'abc';

console.log(cezar(string, 3));
