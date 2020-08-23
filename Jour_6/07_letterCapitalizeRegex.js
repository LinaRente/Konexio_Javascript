function letterCapitalizeRegex() {
    
    function upperCase(str) {
        return str.toUpperCase();
    }
  
    function titleCase(str) {
        var firstLetterRx = /(^|\s)[a-z]/g;
        return str.replace(firstLetterRx, upperCase);
    }
    console.log(titleCase("lina renteria"));
}
letterCapitalizeRegex();
