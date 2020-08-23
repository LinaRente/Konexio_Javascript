function isPalindrome(str) {

    var string = str.length;

    for (var i = 0; i < string/2; i++) {
      if (str[i] !== str[string - 1 - i]) {
          return false;
      }else {
        return true
      }
    }
}

console.log(isPalindrome("eye"))


// function palindrome(str) {
//   var compteur = 0;
//   for (var i = 0; i < compteur.length; i++ ){
//        if (compteur[i] == '0') { 
//        compteur[i] = compteur[i] ;
//        }
//   }
//   if(str.split('').join('') === str) {
//       return true;
//   }
//   else {
//      return false
// }
// }
// console.log(palindrome('never odd or even'));
// console.log(palindrome('eye'));