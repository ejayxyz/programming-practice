let dictionary = ['cica']; // 'kiscica', 'nagycica', 'közepescica', 'kicsitkicsicica', 'kicsitnagycica', 'macska'];
let word = [];
let guessedWord = [];
let life = 10;
let index = 0;
var readline = require('readline-sync');

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
    }
  }
  return true;
};

const makeGuess = (a) => {
  let boolean = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === a) {
      guessedWord[i] = a;
      boolean = true;
    }
  }

  printGame(guessedWord, life);

  console.log(boolean);
};

const main = (key) => {
  word = generateWord(word, dictionary);
  printGame(guessedWord, life);

  while (life > 0) {
    if (!makeGuess(readline.keyIn())) {
      life--;
    }

    if (key === 'q') {
      break;
    }
  }
  if (life === 0) {
    console.log('Sajnos vesztettél');
  }
};

/* let a = 'c';
word = generateWord(word, dictionary);
printGame(guessedWord, life);
isSolved(guessedWord);
makeGuess(a);
console.log(word); */
console.log('Üdvözöllek az akasztófa játékban, kérlek a billentyűk lenyomásával próbáld meg kitalálni a szót. Ha elfogy az életed, a kiscicák fognak veled végezni.');
console.log('Ha ki szeretnél lépni a játékból, kérlek nyomd meg a q gombot.');

main();
console.log(word[0]);
console.log(guessedWord[0]);
