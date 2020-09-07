function formatDateToday() {

     var now = new Date("2018-07-17");
     var year = String(now.getUTCFullYear());

     var day = String(now.getDate());
     // console.log(day);
     var month = String(now.getMonth() + 1);
     // console.log(month);


     if (month.length == 1) {
          month = "0" + month
     }

     return day + "-" + month + "-" + year;

}
console.log(formatDateToday());