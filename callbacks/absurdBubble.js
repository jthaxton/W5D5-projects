const readline = require("readline");

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// main

function absurdBubbleSort(arr, sortCompletionCallback) {


}

function askIfGreaterThan(el1, el2, cb) {
  reader.question(`~••~ is ${el1} greater than ${el2}? ~••~   `, (answer) => {
    if (answer === "yes" || answer === "y") {
      cb(true);
    } else {
      cb(false);
    }
  });
}

function trueFalse(bool) {
  if (bool) {
    console.log("True, sucka!");
  } else {
    console.log("False, try again.... sucka.");
  }
  reader.close();
}

// askIfGreaterThan(5, 7, trueFalse);

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan) {
        let first = arr[i];
        let second = arr[i+1];
        arr[i] = second;
        arr[i+1] = first;
        
      }
    });
  }
}

innerBubbleSortLoop([1, 2, 3], 0, false);
