let words = ["FERAL", "CARGO", "BEGIN", "AMONG", "VIEWS", "CHEAT", "CELLS", "WARES", "ALERT", "TREES", "CHECKS", "STYLE", "SMALL", "SCOUT"];
let firstWord = "FALLS";
let secondWord = "HACKS";
let thirdWord = "TREES";
let usedWords = {
  "FALLS": ["FALLS", 1],
  "HACKS": ["HACKS", 1],
  "TREES": ["TREES", 5]
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
    if (match === usedWords[firstWord][1]) {
      pushUniqueStringToArray(options, word);
    }
  });

  return options;
}

function loadNextTry(arr, secondWord) {
  let newArr = arr;
  arr.forEach((word) => {
    let mismatch = 0;
    secondWord.split('').forEach((letter, index) => {
      if (word[index] !== letter) {
        mismatch++;
      }
    });

    if (word.length - mismatch !== usedWords[secondWord][1]) {
      newArr = newArr.filter((item) => item !== word);
    }
  });
  return newArr;
}

let options = [];

options = loadFirstTry(words, firstWord);
console.log("The options are: ", options);
options = loadNextTry(options, secondWord);
console.log("The options are: ", options);
options = loadNextTry(options, thirdWord);

console.log("The options are: ", options);
