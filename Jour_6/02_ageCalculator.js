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