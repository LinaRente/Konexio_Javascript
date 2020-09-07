function isPalindrome(str) {

  var string = str.length;

  for (var i = 0; i < string / 2; i++) {
    if (str[i] !== str[string - 1 - i]) {
      return false;
    } else {
      return true
    }
  }
}

console.log(isPalindrome("eye"))