let words = ["FERAL", "CARGO", "BEGIN", "AMONG", "VIEWS", "CHEAT", "CELLS", "WARES", "ALERT", "TREES", "CHECKS", "STYLE", "SMALL", "SCOUT"]
let firstWord = "FALLS";
let secondWord = "HACKS";
let thirdWord = "SCRIPT";
let usedWords = {
  "FALLS": ["FALLS", 1],
  "HACKS": ["HACKS", 1],
} 

function pushUniqueStringToArray(arr, str) {
  if (!arr.includes(str)) {
      arr.push(str);
  }
}

function removeStringFromArray(arr, strToRemove) {
  const index = arr.indexOf(strToRemove);
  if (index !== -1) {
      arr.splice(index, 1);
  }
}


function loadFirstTry(words, firstWord) {
  let options = [];

  words.map((word) => {
    let match = [];
    firstWord.split('').forEach((letter, index) => {
        if(word[index] === letter){
          match.push(index);
        }
    });
    if(match.length === usedWords[firstWord][1]){
      pushUniqueStringToArray(options, word);
    }
  });

  return options;
}

function loadSecondTry(arr, secondWord) {
  arr.forEach((word) => {
    if(true) {
      console.log(word)
    };
    let missmatch = [];
    secondWord.split('').forEach((letter, index) => {
        if(word[index] !== letter){
          missmatch.push(index);
        }
    });
    if (missmatch.length - word.length !== usedWords[secondWord][1]) {
      removeStringFromArray(options, word);
  }
  });
  return options;
}


let options = [];


options = loadFirstTry(words, firstWord);
console.log("The opstions are: ", options);
loadSecondTry(options, secondWord);
console.log("The opstions are: ", options);





