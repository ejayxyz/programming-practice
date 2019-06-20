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
    return array;
  }
};

const walk = () => {
  let count = 0;
  console.log(array);
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

// console.log(step());
walk();
