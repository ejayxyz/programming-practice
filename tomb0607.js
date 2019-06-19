var array = [1, 2, 3];
var string = '';
const b1 = '[';
const b2 = ']';
const c = ',';
/* let draw = (array, callback) => {

}; */

const callback1 = (a) => {
  string = '';

  for (let i = 0; i < 1; i++) {
    string += b1 + array[i] + b2;
    console.log(string);
  }
  string = '';

  for (let i = 0; i < 2; i++) {
    if (array[i] === 1) {
      string += b1 + array[i] + c;
    } else {
      string += array[i] + b2;
    }
  }
  console.log(string);

  string = '';

  for (let i = 0; i < 3; i++) {
    if (array[i] === 1) {
      string += b1 + array[i] + c;
    }
    if (array[i] === 2) {
      string += array[i] + c;
    }
    if (array[i] === 3) {
      string += array[i] + b2;
    }
  }
  console.log(string);
};

const callback2 = a => {
  string = '';

  for (let i = 0; i < 3; i++) {
    if (array[i] === 1) {
      string += b1 + array[i] + c;
    }
    if (array[i] === 2) {
      string += array[i] + c;
    }
    if (array[i] === 3) {
      string += array[i] + b2;
    }
  }
  console.log(string);

  string = '';

  for (let i = 0; i < 2; i++) {
    if (array[i] === 1) {
      string += b1 + array[i] + c;
    } else {
      string += array[i] + b2;
    }
  }
  console.log(string);

  string = '';

  for (let i = 0; i < 1; i++) {
    string += b1 + array[i] + b2;
    console.log(string);
  }
};

callback1();
console.log('----');
callback2();

/* for (let j = 0; j < 2; j++) {
  console.log(array[j]);
}

for (let k = 0; k < 3; k++) {
  console.log(array[k]);
} */
