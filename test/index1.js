// Créer un array vide
// Faire une boucle jusqu’a 5 et pour chaque
// tour de boucle on rajoute une valeur aleatoire entre 0 et 7
// Afficher l’array

var array = [] ;

var num = 5; 

for(var i = 0; i <= num; i++) {
    var number = Math.floor(Math.random()*7);
    array.push(number);
}
console.log(array);


Create an array of words
