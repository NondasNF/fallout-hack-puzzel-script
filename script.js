let words = ["FERAL", "CARGO", "BEGIN", "AMONG", "VIEWS", "CHEAT", "CELLS", "WARES", "ALERT", "TREES", "CHECKS", "STYLE", "SMALL", "SCOUT"];
let firstWord = "FALLS";
let secondWord = "CARGO";
let thirdWord = "VIEWS";
let usedWords = {
  "FALLS":  1,
  "CARGO":  0,
  "VIEWS": 0
};

function pushUniqueStringToArray(arr, str) {
  if (!arr.includes(str)) {
    arr.push(str);
  }
}

function loadFirstTry(words, firstWord) {
  let options = [];

  words.forEach((word) => {
    let match = 0;
    firstWord.split('').forEach((letter, index) => {
      if (word[index] === letter) {
        match++;
      }
    });
    if (match === usedWords[firstWord]) {
      pushUniqueStringToArray(options, word);
    }
  });

  return options;
}

function loadNextTry(arr, nextWord) {
  if (nextWord === "") {
    return arr;
  }
  let newArr = arr;
  arr.forEach((word) => {
    let mismatch = 0;
    nextWord.split('').forEach((letter, index) => {
      if (word[index] !== letter) {
        mismatch++;
      }
    });

    if (word.length - mismatch !== usedWords[nextWord]) {
      newArr = newArr.filter((item) => item !== word);
    }
  });

  return newArr;
}

let options = [];

options = loadFirstTry(words, firstWord);
console.log("The options after first try are: ", options);
options = loadNextTry(options, secondWord);
console.log("The options after second try are: ", options);
options = loadNextTry(options, thirdWord);
console.log("The options after third try are: ", options);
