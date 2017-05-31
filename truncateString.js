
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num < 4) {
    return str.slice(0, num) + "..."
  } else {
    return str.slice(0, (num-3)) + "..."
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 20));
