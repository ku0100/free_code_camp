function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str = str.toLowerCase()
  var firstLetter = str[str.length - 1];
  if (firstLetter === target) {
    return true;
  } else {
    return false;
  };
}

console.log(confirmEnding("Bastian", "n"));
