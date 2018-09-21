const readline = require("readline");
reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    console.log(`nums left: ${numsLeft}`);

    reader.question("pls feed number~", (answer) => {

      let input = parseInt(answer, 10);
      sum += input;
      console.log(`running sum: ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });

  } else {

    completionCallback(sum);
    reader.close();
  }

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
