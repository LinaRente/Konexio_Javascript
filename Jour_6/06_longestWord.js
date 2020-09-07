function longestWord(str) {

    var string = str.split(" ");
    var longest = 0;
    var word;

    for (var i = 0; i < string.length; i++) {

        if (longest < string[i].length) {
            longest = string[i].length;
            word = string[i];
        }
    }
    return word;
}
console.log(longestWord("I loveeee dogs"))
