let tomb = [1, 2, 3];

const stepSum1 = (arr) => {
  if (arr.length === 1) {
  }
  if (arr.length === 2) {
    arr = ([(arr[0] + arr[1])]);
  } else {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += arr[i + 1];
    }
    arr.pop();
    stepSum1(arr);
  }
  console.log(arr);
};

stepSum1(tomb);
