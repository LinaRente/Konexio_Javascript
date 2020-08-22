function letterCapitalize() {
    function upperCase(sentence) {
        return sentence.toUpperCase();
    }
    function titleCase(sentence) {
        var firstLetterRx = /(^|\s)[a-z]/g;
        return sentence.replace(firstLetterRx, upperCase);
    }
    console.log(titleCase("lina renteria"));
}
letterCapitalize()
