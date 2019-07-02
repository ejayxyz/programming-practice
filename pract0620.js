let array = [0, 0, 0];

const stepOne = () => {
  console.log(array);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array[i] = 1;
    }
    if (i > 0) {
      array[count] = 0;
      count++;
    }

    console.log(array);
  }
  array[count] = 0;
  console.log(array);
};

// stepOne(array);

const step = () => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array[i] = 1;
      return array;
    }
    if (i > 0) {
      array[count] = 0;
      count++;
    }
  }
  array[count] = 0;
};

const walk = (array, n) => {
  console.log(array);
  let move = 0;
  while (move < n) {
    step();
    console.log(array);
    move++;
  }
  return [array, n];
};

walk(array, 3);
