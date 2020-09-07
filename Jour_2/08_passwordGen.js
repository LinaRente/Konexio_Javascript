var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = 9;

function passwordGen(num, letters) {
    var mdp = " ";
    if (num > 6 && num < 15) {
        for (var i = 0; i <= num; i++) {
            mdp += letters.charAt(Math.floor(Math.random() * letters.length - 1));
        }
        return mdp
    } else {
        return "error";
    }
}

console.log(passwordGen(num, letters));