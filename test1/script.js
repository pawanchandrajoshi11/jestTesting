const word3 = "brush";
const word4 = "pick";

function checkLength(word3) {
  if (word4.length > 4) {
    return true;
  } else {
    return false;
  }
}

function checkIfWordContainsI() {
  if (word3.includes("i")) {
    return true;
  } else {
    return false;
  }
}

function concatTwoWords(word1, word2) {
  return word1 + word2;
}

function myArray(array) {
  return [...array];
}

// export the function we want to test
module.exports = {
  concatTwoWords,
  myArray,
};
