// date = 2020-08-21T08:58:50.661Z   
// J'ai besoin d'afficher ma date en jj/mm/aaaa

// Pour cela je vais avoir besoin des methods
// getFullYear()  l'année en 4chiffres 2020
// getMonth()     le numéro du mois    8 
// getDate()      le jour du mois      21
// getDay()       le nombre du jour  donne le jour de la semaine ex : vendredi = 5. Donc PAS BESOINS dans mon exo.

// J'ai besoin de variables pour stocker mes resultats.
// Je dois return de  day + "/" + month + "/" + year . Cela ne m'affiche pas les zero dans les nombres sous 10.
// Faire une condition qui permettra de rajouter un zero s'il y a moins de 2 nombres ?

function formatDateToday() {

     var now = new Date();
     var day = now.getDate();
     // console.log(day);
     var month = now.getMonth() + 1;
     // console.log(month);
     var year = now.getFullYear();
     // console.log(year);

     if (day < 10) {
          day = "0" + day;
     }
     if (month < 10) {
          month = "0" + month
     }

     return day + "/" + month + "/" + year;

}
console.log(formatDateToday());
