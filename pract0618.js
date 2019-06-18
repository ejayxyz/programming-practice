/* const generateArray = (a) => {
  let tomb = [1];
  for (let i = 0; i < a; i++) {
    tomb[i] = Math.floor(Math.random() * 10) + 1;
  }

  return tomb;
};
*/

const smallestDifference = (arr1, arr2) => {
  let diff2 = 20;
  let temp1;
  let temp2;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if ((diff2 > arr1[i] - arr2[j] && arr1[i] - arr2[j] >= 0) || (diff2 > arr2[j] - arr1[i] && arr2[j] - arr1[i] >= 0)) {
        diff2 = arr1[i] - arr2[j];
        temp1 = arr1[i];
        temp2 = arr2[j];
      }
    }
  }

  return [temp1, temp2];
};

const stepSum = (arr) => {
  if (arr.length === 1) {
    console.log(arr);
    return arr;
  } else {
    let tomb = [];
    for (let i = 0; i < arr.length; i++) {
      if (i > 0) {
        tomb.push(arr[i] + arr[i - 1]);
      }
    }

    tomb = stepSum(tomb);
    console.log(arr);
  }
};

const permutations = (arr) => {
  console.log(arr);
  // if ()
  for (let i = 0; i < arr.length; i++) {
    let tomb = arr;
    let temp;
    if (i > 0 && arr[i] !== tomb[i + 1]) {
      temp = tomb[i + 1];
      tomb[i + 1] = arr[i];
      arr[i] = temp;
      return tomb;
    }
    tomb = permutations(tomb);
  }

  return arr;
};

/* let arr1 = [10, 3, 2, 1];
console.log(arr1);
let arr2 = [6, 8, 9, 10];
console.log(arr2);
console.log(smallestDifference(arr1, arr2));
*/

let array = [1, 2, 3];
// console.log(permutations(array));
// stepSum(array);
console.log(permutations(array));
