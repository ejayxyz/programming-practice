let dictionary = ['cica']; // 'kiscica', 'nagycica', 'közepescica', 'kicsitkicsicica', 'kicsitnagycica', 'macska'];
let word = [];
let guessedWord = [];
let life = 10;

var readline = require('readline-sync');

const generateWord = () => {
  word = dictionary[Math.floor(Math.random() * dictionary.length)];
  for (let i = 0; i < word.length; i++) {
    guessedWord.push('_');
  }
  life = Math.floor(word.length / 2);
};

const printGame = () => {
  for (let i = 0; i < guessedWord.length; i++) {
    process.stdout.write(guessedWord[i] + ' ');
  }
  console.log('\nLife points', life);
};

const isSolved = () => {
  for (let i = 0; i < guessedWord.length; i++) {
    if (guessedWord[i] === '_') return false;
  }
  return true;
};

const makeGuess = (a) => {
  let found = false;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === a) {
      guessedWord[i] = word.charAt(i);
      found = true;
    }
  }

  return found;
};

const main = () => {
  generateWord();
  console.log('Üdvözöllek az akasztófa játékban, kérlek a billentyűk lenyomásával próbáld meg kitalálni a szót. Ha elfogy az életed, a kiscicák fognak veled végezni.');

  printGame();
  while (life > 0) {
    if (!makeGuess(readline.keyIn())) {
      life--;
    }
    printGame();
    if (isSolved()) {
      console.log('nyertél');
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

main();
