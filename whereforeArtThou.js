function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  // newCollection = collection[2];
  // return newCollection['last'] === source['last'];

  var keys = Object.keys(source);
  
  for (var i = 0; i < collection.length; i++) {
    var j = 0;
    for (var h = 0; h < keys.length; h++) {
        if (collection[i].hasOwnProperty(keys[h])) {
            var newCollection = collection[i];
            if (newCollection[keys[h]] === source[keys[h]]) {
                j += 1;
                if (j === keys.length) {
                    arr.push(newCollection);
                }
            }
        }
    }
  }
  return arr;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
