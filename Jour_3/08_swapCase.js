function swapCase(str) {
    var string = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            string += str[i].toUpperCase();
        } else {
            string += str[i].toLowerCase();
        }
    }
    console.log(string);
    return string;
}
var text = "Hello World"

swapCase(text);