let dictionary = ['cica', 'kiscica', 'nagycica', 'közepescica', 'kicsitkicsicica', 'kicsitnagycica', 'macska'];
let word = '';
let guessedWord = [];
let life = 10;
let index = 0;

const generateWord = (word, arr) => {
  index = Math.floor(Math.random() * arr.length);
  word = arr[index];
  for (let i = 0; i < word.length; i++) {
    guessedWord.push('_');
  }
  life = Math.floor(word.length / 2);
  return word;
};

const printGame = (arr, life) => {
  let string = arr.join(' ');
  console.log(string);
  console.log(life);
};

const isSolved = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '_') {
      return false;
    } else {
      return true;
    }
  }
};

const makeGuess = (a) => {
  let boolean = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === a) {
      guessedWord[i] = a;
      boolean = true;

      // console.log(boolean);
    }
  }

  printGame(guessedWord, life);
  console.log(boolean);
};

const main = (key) => {
  let readline = require('readline-sync');
  word = generateWord(word, dictionary);
  printGame(guessedWord, life);
  isSolved(guessedWord);
  makeGuess(key);
};

let a = 'c';
// word = generateWord(word, dictionary);
// printGame(guessedWord, life);
// isSolved(guessedWord);
// makeGuess(a);
// console.log(word);

main(a);
