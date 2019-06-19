let step_r = 'right';
let step_l = 'left';
let step_u = 'up';
let step_d = 'down';

let steps = ['right'];

let steps1 = ['right', 'up'];

let number0 = 0;
let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4;
let number5 = 5;
let number6 = 6;
let number7 = 7;
let number8 = 8;
let start = 4;

let texturalNumber0 = 'ez a nullás mező';
let texturalNumber1 = 'ez az egyes mező';
let texturalNumber2 = 'ez a kettes mező';
let texturalNumber3 = 'ez a hármas mező';
let texturalNumber4 = 'ez a négyes mező';
let texturalNumber5 = 'ez az ötös mező';
let texturalNumber6 = 'ez a hatos mező';
let texturalNumber7 = 'ez a hetes mező';
let texturalNumber8 = 'ez a nyolcas mező';
let texturalNumberX = 'X';

const move = (firstStep, secondStep) => {
  switch (firstStep) {
    case step_r: number4 = number5;
      switch (secondStep) {
        case step_u: number5 = number2;
          console.log(number2, texturalNumber2);
          break;
        case step_d: number5 = number8;
          console.log(number8, texturalNumber8);
          break;
        case step_l: number5 = number4;
          console.log(number4, texturalNumber4);
          break;
        default:
          console.log(texturalNumberX);
      }
      break;

    case step_l: number4 = number3;
      switch (secondStep) {
        case step_u: number3 = number0;
          console.log(number0, texturalNumber0);
          break;
        case step_d: number3 = number6;
          console.log(number6, texturalNumber6);
          break;
        case step_r: number3 = start;
          console.log(start, texturalNumber4);
          break;
        default:
          console.log(texturalNumberX);
      }
      break;

    case step_u: number4 = number1;
      switch (secondStep) {
        case step_l: number1 = number0;
          console.log(number0, texturalNumber0);
          break;
        case step_d: number1 = start;
          console.log(start, texturalNumber4);
          break;
        case step_r: number1 = number2;
          console.log(number2, texturalNumber2);
          break;
        default:
          console.log(texturalNumberX);
      }
      break;

    case step_d: number4 = number7;
      switch (secondStep) {
        case step_l: number7 = number6;
          console.log(number6, texturalNumber6);
          break;
        case step_u: number7 = start;
          console.log(start, texturalNumber4);
          break;
        case step_r: number7 = number8;
          console.log(number8, texturalNumber8);
          break;
        default:
          console.log(texturalNumberX);
      }
      break;

    default: console.log(texturalNumberX);
  }
};

move(step_r, step_u);
move(step_r, step_r);
move(step_u, step_d);
move(step_d, step_l);
