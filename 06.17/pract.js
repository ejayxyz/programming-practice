const generate2DArray = (n) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }
  return arr;
};

const randomNumb = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 3 + 1);
    }
  }
  return arr;
};

const verticalArray = (arr) => {
  let exist = false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 2 && (arr[i][j - 1]) === 1 && (arr[i][j + 1]) === 3) {
        count++;
        exist = true;
      }
    }
  }
  return [exist, count];
};

const horizontalArray = (arr) => {
  let exist = false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i > 1) {
        if (arr[i][j] === 3 && (arr[i - 1][j] === 2 && (arr[i - 2][j] === 1))) {
          exist = true;
          count++;
        }
      }
    }
  }
  return [exist, count];
};

const searchLArray = (arr) => {
  let exist = false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i > 0 && j > 0) {
        if (arr[i][j] === 3 && arr[i - 1][j] === 2 && arr[i - 1][j - 1] === 1) {
          exist = true;
          count++;
        }
      }
    }
  }
  return [exist, count];
};

let tomb = generate2DArray(20);
randomNumb(tomb);
console.log(tomb);
console.log('Vertikális 123 van-e?', verticalArray(tomb));
console.log('Horizontáliks 123 van-e?', horizontalArray(tomb));
console.log('L betű 123', searchLArray(tomb));
