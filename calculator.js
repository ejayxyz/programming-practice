let readline = require('readline-sync');

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

let array = '';

const whichOne = () => {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (i > 0 && array[i] === '+') {
      array = array.split(/[+*-/]/g);

      result = add(Number(array[0]), Number(array[1]));
      console.log('Eredmény:', result);
      return result;
    }
    if (i > 0 && array[i] === '-') {
      array = array.split(/[+*-/]/g);

      result = sub(Number(array[0]), Number(array[1]));
      console.log('Eredmény:', result);
      return result;
    }
    if (i > 0 && array[i] === '*') {
      array = array.split(/[+*-/]/g);

      result = mult(Number(array[0]), Number(array[1]));
      console.log('Eredmény:', result);
      return result;
    }
    if (i > 0 && array[i] === '/') {
      array = array.split(/[+*-/]/g);

      result = div(Number(array[0]), Number(array[1]));
      console.log('Eredmény:', result);
      return result;
    } else {

    }
  }
  console.log('Gondold újra az életed');
};

// array = array.split(/[+*-/]/g);

// array = array.split(/[+*-/]/g);
console.log('Üdv a számológépben.');
console.log('Kérlek add meg az elvégzendő műveletet');
array = readline.question();
whichOne();

// console.log(array);
