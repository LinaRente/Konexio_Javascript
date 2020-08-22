function letterChanges(str) { 
    var newString = '';
    var vowels = ['a','e','i','o','u']
    var newCode = 0;
    var len = str.length;
    var i = 0;
    var z = 'z';
    var a = 'A';
    
    for (; i < len; i++){
      /*Using ASCII code: this if statement return true if character at
      str[i] is a - y*/
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 121) {
          //Assign ASCII code plus 1 to a variable newCode
          //return newLetter
            newCode = str.charCodeAt(i) + 1;
            newLetter = String.fromCharCode(newCode);
          /*Loop newLetter through vowel list, add letter to newString if 
          found, else add upperCase newLetter*/
            if (vowels.includes(newLetter)) {
                newString += newLetter.toUpperCase();
            } else {
                newString += newLetter;
            }
      /*Use variables: Check to see if letter is z in which case add 'A' */
        } else if (str[i] === z){
            newString += a;
    
      /*else just add to newString i.e uppercase(question didn't specify), 
      symbols, number...*/        
        } else {
            newString += str[i];
        }
    }
    return newString; 
    
    } 
console.log(letterChanges('hello*3'))




// function letterChange(str) { 
  
//     var strArray = str.toLowerCase().split("");
//     var letterChange = strArray.map(function(value, index, array){
      
//         if(str.charCodeAt(index) < 97 || str.charCodeAt(index) > 122){
//             return value
//         }else{
//             return String.fromCharCode(str.charCodeAt(index)+1)
//         }
//     });
    
//     letterChange = letterChange.map(function(value, index, array){
//         if(/[aeiou]/.test(value)){
//             return value.toUpperCase();
//         }else{
//             return value;
//         }
//     });
    
//     return letterChange.join(""); 
// }
// console.log(letterChange('fun times'));
