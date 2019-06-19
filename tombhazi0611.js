let tomb = [1, 2, 3];
let draw = (mycallback, ...params) => {
  return mycallback(...params);
};

const callback1 = (tomb) => {
  let a = tomb[1];
  let b = tomb[2];
  for (let i = 0; i < 1; i++) {
    tomb = tomb[0];
    console.log(tomb);
  }
};
const callback2 = (tomb) => {
  for (let i = 0; i < 3; i++) {
    console.log(tomb);
    tomb.pop();
  }
};

draw(callback1, tomb);
