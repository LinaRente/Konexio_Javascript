module.exports = {
    
    getTimePassed: function(date1, date2) { 

        var date1 = String(process.argv[2]);
        var date2 = String(process.argv[3]);
        // console.log(date2, date1)

        var firstTime = new Date(date1);
        var secondTime = new Date(date2);
        // console.log(firstTime + secondTime);

        var timeDiff = secondTime.getTime() -  firstTime.getTime();
        // console.log(timeDiff);

        var minDiff = timeDiff / 60 / 1000; //les minutes!;
        var hDiff = timeDiff / 3600 / 1000; // les heures.

        var hours = Math.floor(hDiff);
        var minutes = minDiff - 60 * hours;

        timeDiff /= 1000;
        var jours = Math.floor(timeDiff / 86400);

        return "Days passed : " + jours + " and minutes passe :"  + minutes; 

    }
}

