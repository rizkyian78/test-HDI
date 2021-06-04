function generatePattern(num) {
  var characterTotal = num * 2 - 1;
  console.log(characterTotal, "<<<<<<<<<<<<<");
  var result = "";
  var tmp = "";

  for (var i = characterTotal - 1; i >= 0; i--) {
    for (var j = 0; j < characterTotal; j++) {
      console.log(num - Math.abs(j - i) + 1);
      tmp = ((num - Math.abs(j - i) + 1) / 2) % 2 === 0 ? "X" : "O";
      if (
        (i % 2 === num % 2 || j % 2 === 1) &&
        (i % 2 !== num % 2 || j % 2 !== 1)
      )
        tmp = " ";
      if (i + 1 < num) {
        if (j + 2 <= num) tmp = " ";
        if (j + 1 > i + num) break;
      }
      if (i + 1 > num) {
        if (j + 1 > num) break;
        if (j + num < i) tmp = " ";
      }
      result += tmp;
    }
    result += "\n";
  }
  return result;
}

console.log(generatePattern(15));
