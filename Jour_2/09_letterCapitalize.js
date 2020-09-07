function letterCapitalize(sentence) {

    var string = sentence.toLowerCase().split(' ');

    for (var i = 0; i < string.length; i++) {

        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }

    return string.join(' ');
}

console.log(letterCapitalize("lina renteria")); 