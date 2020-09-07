function alphabetSoup(str) {
    var word = str.split("");
    var count;
    for (var i = 0; i < word.length; i++) {
        for (var j = i + 1; j < word.length; j++) {
            if (word[i] > word[j]) { //if i<j = cela va commencer par la fin de l'alphabet
                count = word[i];
                word[i] = word[j];
                word[j] = count;
            }
        }
    }
    return word.join("");
}
console.log(alphabetSoup("elisabeth"));


// array.sort

function sortString(str) {
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
}
console.log(sortString('elisabeth'))    