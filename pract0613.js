let arr1 = [1, -26, 1, 1, 1];
let arr2 = [1, 1, 7, 6];

const maxArray = (arr) => {
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i] && arr[i] % 3 === 0) {
      max = arr[i];
    }
  }
  if (max === Number.NEGATIVE_INFINITY) {
    max = console.log('Nincs 3-mal osztható szám a tömbben');
  }
  return max;
};

const minArray = (arr) => {
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min && arr[i] % 2 === 0) {
      min = arr[i];
    }
  }
  if (min === Number.POSITIVE_INFINITY) {
    min = console.log('Nincs 2-vel osztható szám a tömbben');
  }

  return min;
};

// console.log('Minimum eleme az első tömbnek:', minArray(arr1));
// console.log('Maximum eleme a második tömbnek:', maxArray(arr2));

const diff = (arrMax, arrMin) => {
  if (arrMax > arrMin) {
    return arrMax - arrMin;
  } else {
    return arrMin - arrMax;
  }
};

// console.log('Különbsége:', diff(maxArray(arr2), minArray(arr1)));

let tomb = [8, 10, 4, 5, 6, 2, 7, 3, 9, 0, 1];

const arrayEightyPercent = (array) => {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        let num = array[i - 1];
        array[i - 1] = array[i];
        array[i] = num;
      }
    }
  }

  let x = array.length * 0.8;

  console.log(array[Math.round(x) - 1]);
  return array;
};

console.log('80% legnagyobb:', arrayEightyPercent(tomb));
