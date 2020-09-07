function exOh(str) {
    var countX = 0;
    var countO = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            countX += 1;

        } else if (str[i] === "o") {
            countO += 1
        }
    }
    if (countX === countO) {

        return true;

    } else {

        return false;

    }
}
console.log(exOh("xxxooo"));

