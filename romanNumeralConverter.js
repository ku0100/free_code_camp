function convertToRoman(num) {
  var romanNumerals = "";
  while (num > 0) {
    if (num >= 1000) {
      var m = Math.floor(num / 1000);
      num = (num % 1000);
      romanNumerals = "M".repeat(m);
    } else if (num >= 900) {
      num = num - 900;
      romanNumerals = romanNumerals + "CM";
    } else if (num >= 500) {
      var d = Math.floor(num / 500);
      num = (num % 500);
      romanNumerals = romanNumerals + "D".repeat(d);
    } else if (num >= 400) {
      num = num - 400;
      romanNumerals = romanNumerals + "CD";
    } else if (num >= 100) {
      var c = Math.floor(num / 100);
      num = (num % 100);
      romanNumerals = romanNumerals + "C".repeat(c);
    } else if (num >= 90) {
      num = num - 90;
      romanNumerals = romanNumerals + "XC";
    } else if (num >= 50) {
      var l = Math.floor(num / 50);
      num = (num % 50);
      romanNumerals = romanNumerals + "L".repeat(l);
    } else if (num >= 40) {
      num = num - 40;
      romanNumerals = romanNumerals + "XL";
    } else if (num >= 10) {
      var x = Math.floor(num / 10);
      num = (num % 10);
      romanNumerals = romanNumerals + "X".repeat(x);
    } else if (num >= 9) {
      num = num - 9;
      romanNumerals = romanNumerals + "IX";
    } else if (num >= 5) {
      var v = Math.floor(num / 5);
      num = (num % 5);
      romanNumerals = romanNumerals + "V".repeat(v);
    } else if (num >= 4) {
      num = num - 4;
      romanNumerals = romanNumerals + "IV";
    } else {
      var i = Math.floor(num / 1);
      num = (num % 1);
      romanNumerals = romanNumerals + "I".repeat(i);
    }
  }
  return romanNumerals;
}

console.log(convertToRoman(44));
