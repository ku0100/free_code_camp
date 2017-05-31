
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newNum = num;
  if (str.length > num) {
    if (newNum < 4) {
      return str.slice(0, newNum) + "...";
    } else {
      return str.slice(0, (newNum - 3)) + "...";
    }
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", ));
