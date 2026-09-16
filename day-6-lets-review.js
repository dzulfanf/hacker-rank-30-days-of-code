function processData(input) {
  //Enter your code here
  const lines = input.trim().split("\n");
  const T = parseInt(lines[0]);

  for (let j = 1; j <= T; j++) {
    const str = lines[j];

    var oddStr = "";
    var evenStr = "";

    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) evenStr += str[i];
      else oddStr += str[i];
    }

    console.log(`${evenStr} ${oddStr}`);
  }
}