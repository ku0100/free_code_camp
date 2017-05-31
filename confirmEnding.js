function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str = str.toLowerCase();
  tgtStr = str.substr((str.length - target.length), target.length);
  if (tgtStr === target) {
    return true;
  } else {
    return false;
  };
}

console.log(confirmEnding("Bastian", "n"));
