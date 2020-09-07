var time = require('./getTimePassed');

// creer une fonction avec deux params (date1, date2) qui retourne les temps entre deux dates en format string. 

//  une variable qui m'affiche date1 en process.argv
//  une variable qui m'affiche date2 en process.argv        

// une variable newDate qui stock ma date1
// une variable newDate qui stock ma date2

// une variable pour calculcer la diff entre les deux dates
// calculer les minutes et les heueres.

function getTimePassed(date1, date2) {

    // var date1 = "December 27, 1987 11:20:00";
    // var date2 = "December 28, 1987 11:20:00";
    var date1 = String(process.argv[2]);
    var date2 = String(process.argv[3]);
    // console.log(date2, date1)

    var firstTime = new Date(date1);
    var secondTime = new Date(date2);
    // console.log(firstTime + secondTime);

    var timeDiff = secondTime.getTime() - firstTime.getTime();
    // console.log(timeDiff);

    var minDiff = timeDiff / 60 / 1000; //les minutes!;
    var hDiff = timeDiff / 3600 / 1000; // les heures.
    // console.log(minDiff, hDiff)

    var hours = Math.floor(hDiff);
    var minutes = minDiff - 60 * hours;
    // console.log(hours, minutes)

    timeDiff /= 1000;
    var jours = Math.floor(timeDiff / 86400);
    // console.log(jours)

    return "Days passed : " + jours + " and minutes passe :" + minutes;
}
console.log(time.getTimePassed());