function letterCount(str) { 

    var string = str.split(" ");
    // console.log(string);
    var result = 0;
    var word = "-1"
  
    for (var i = 0; i < string.length; i++) {
        // console.log(string);
        for (var j = 0; j < string[i].length; j++) {
            var count1 = 0;
                for (var k = j + 1; k < string[i].length; k++) {
                    if(string[i] + string[j] === string[i] + string[k]) {
                        count1 += 1;
                    }           
                    if(count1 > result) {
                        result = count1;
                        word = string[i];
                    }
                }
        }
        
    }
    return word;
}          
console.log(letterCount("Today, is the greatest day ever!"));
