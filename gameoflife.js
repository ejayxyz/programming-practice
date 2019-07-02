const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill2d = () => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = 0;
    }
  }
};

const print2d = () => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      process.stdout.write(array[i][j] + ' ');
    }
    console.log();
  }
};

const addCell = (arr, str) => {
  let split = [];
  split = str.split(' ');
  let x = split[1];
  let y = split[0];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (Number(y) === i && Number(x) === j) {
        array[i][j] = 1;
      }
    }
  }
  return [x, y];
};

const getNeighbors = (arr, x, y) => {

};

let str = '1 2';
let array = generate2d(5, 5);
fill2d();

addCell(array, str);
print2d(array);
let coordinates = addCell(array, str);
