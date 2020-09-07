var numTest = 90;

function timeConvert(num) {

    var heure = Math.floor(num / (60 * 60));

    var minutesModulo = num % (60 * 60);

    var minutes = Math.floor(minutesModulo / 60);

    var secondesModulo = minutesModulo % 60;
    var secondes = Math.ceil(secondesModulo);

    return heure + ":" + minutes + ":" + secondes;
}
console.log(timeConvert(numTest));