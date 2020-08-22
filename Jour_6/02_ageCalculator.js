// Besoin d'une fonction qui a commme parametre date.

//il me faut une variable qui me donne la date.
// il me faut une variable pour stocker ma date de naissance
// faire la date d'aujourd'hui moins la date de naissance. 
// return age 



function ageCalculator(date) {
    var today = new Date();
    // console.log(today);
    var birthDate = new Date(date);
    // console.log(birthDate);   
    var age = today.getFullYear() - birthDate.getFullYear();
    // console.log(age);
    
    return age;
} 
console.log(ageCalculator("May 31, 1988"));



// function ageCalculator(date){

//     var date= new Date('January 31, 1988 11:20:00');

//     return Math.abs(date.getUTCFullYear()-2020);

// }
// console.log(ageCalculator(Date));




// version timestamp

// function ageCalculator(date) {
//     var d= new Date()
    
//     var aaaa = String(d.getUTCFullYear());
//     var timestamp = new Date('January 31, 1989 11:20:00');

//     var timestamp = Math.abs(date = new Date(timestamp).getFullYear() -aaaa);
//     console.log(timestamp)
// }
// ageCalculator()