function letterCount(str, search) {

  var string = str.toLowerCase(' ');
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === search) {
      count += 1;
    }
  }
  return count;
}

console.log(letterCount('lina ornella safia', 'a'));