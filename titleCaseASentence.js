function titleCase(str) {
  var expression = /\w+/g;
  var capitalStr = str.match(expression);
  var newArr = [];
  for (var i = 0; i < capitalStr.length; i++) {
    newArr.push(capitalStr[i][0].toUpperCase() + capitalStr[i].slice(1).toLowerCase());
  };
  newArr.join(" ");
  return newArr;
};

console.log(titleCase("little tea pot"));
