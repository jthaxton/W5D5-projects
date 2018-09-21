const readline = require("readline");

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// main

function absurdBubbleSort(arr, sortCompletionCallback) {

<<<<<<< HEAD
  function outerBubbleSortLoop(swaps) {
    if (swaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
=======

>>>>>>> 955f50883fbcf39698d6b8e6326f4953d4eb96aa
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

<<<<<<< HEAD
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i < arr.length - 1) {

    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {

      if (isGreaterThan) {

=======
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
>>>>>>> 955f50883fbcf39698d6b8e6326f4953d4eb96aa
        let first = arr[i];
        let second = arr[i+1];
        arr[i] = second;
        arr[i+1] = first;
<<<<<<< HEAD
        madeAnySwaps = true;

      }
      console.log(arr);
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);


    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function dummy(arr) {
  reader.close();
  console.log(`Sorted array: ${arr}`);
  return arr;
}
// innerBubbleSortLoop([2,5,1,4,3], 0, false, outerBubbleSortLoop);

absurdBubbleSort([3,2,1,4], dummy);
=======
        
      }
    });
  }
}

innerBubbleSortLoop([1, 2, 3], 0, false);
>>>>>>> 955f50883fbcf39698d6b8e6326f4953d4eb96aa
