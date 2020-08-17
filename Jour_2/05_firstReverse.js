function firstReverse(str) {
    var reverse = " ";
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str.charAt(i);
    }
    return reverse;
}
console.log(firstReverse("Hello world and coders"));