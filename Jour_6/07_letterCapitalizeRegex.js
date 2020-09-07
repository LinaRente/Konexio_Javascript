function letterCapitalizeRegex() {

    function upperCase(str) {
        return str.toUpperCase();
    }

    function firstCase(str) {
        var firstLetter = /(^|\s)[a-z]/g;
        return str.replace(firstLetter, upperCase);
    }
    console.log(firstCase("mi casita esta bien bonita"));
}
letterCapitalizeRegex();
