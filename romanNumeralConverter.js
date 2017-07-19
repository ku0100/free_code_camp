function convertToRoman(num) {
  var dictionary = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
  }

  var romanNumerals = "";
  while (num > 0) {
    for (var key in dictionary) {
      if (num / dictionary[key] >= 1) {
        var x = Math.floor((num / dictionary[key]));
        romanNumerals = romanNumerals + key.repeat(x);
        num = (num - (x * dictionary[key]));
      }
    }
    return romanNumerals;
  }
}

console.log(convertToRoman(4453));
