function vowelCount(str) {
    var count = 0;

    for (var i = 0; i <= str.length; i++) {

        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {

            count = count + 1;
        }

    }
    return count;
}
console.log(vowelCount("ornella"));