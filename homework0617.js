
const fill2DArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 10 + 1);
    }
  }
  return arr;
};

const sum2DArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
};

const max2DArray = (arr) => {
  let max = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (max < arr[i][j]) {
        max = arr[i][j];
      }
    }
  }
  return max;
};

let tomb = [[0, 0], [0, 0], [0, 0]];
console.log(fill2DArray(tomb));
console.log(sum2DArray(tomb));
console.log(max2DArray(tomb));
