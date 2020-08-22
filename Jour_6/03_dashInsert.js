// un split 
// une boucle 
// une condition
// joint


function dashInsert(str) { 
    
    var string = str.toString().split("");
    // console.log(string);

    for(var i = 0; i < string.length; i++) {
        if(string[i] % 2 == 1 && string[i+1]% 2 == 1){
            string[i] = string[i] + " - "
        }
        // console.log(string);
    }
    return string.join("");
}
console.log(dashInsert('9999476'));


