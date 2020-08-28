function letterCountRepeat(str) {

    var array = str.split(" ");
    var result = 0;
    var word = '-1'

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            var count = 0;
            var actualWord = array[i];
            for (var k = j + 1; k < actualWord.length; k++) {
                if (actualWord[j] === actualWord[k]) {
                    count += 1;
                }
                if (count > result) {
                    result = count;
                    word = actualWord;
                }
            }
        }

    }
    return word;
}
console.log(letterCountRepeat("no words"));
