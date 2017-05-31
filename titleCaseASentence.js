function titleCase(str) {
  var expression = /\w+[']\w+|\w+/g;
  var capitalStr = str.match(expression);
  var newArr = [];
  for (var i = 0; i < capitalStr.length; i++) {
    newArr.push(capitalStr[i][0].toUpperCase() + capitalStr[i].slice(1).toLowerCase());
  };
  var upperCase = newArr.join(" ");
  return upperCase;
};

console.log(titleCase("I'm a little teapot"));
