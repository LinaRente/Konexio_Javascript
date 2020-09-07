// creer une fonction avec parametre un tableau.
//creer une variable arr pour stocker le tableau ?
//creer une boucle qui va parcourir le tableau.
// comment suivre les chiffres trouver ? 
// stocker les chiffres trouver
//utiliser arr.sort ?
// faire une conditions pour comparer les chiffres du tableau.?
// si utiliser le arr.sort donner a mes variables la position du tableau que je veux qu'elles affichent.
// Ne pas oublier de verifier chaque étape avec les console.log

var secondGreat;
var secondLow;

function secondGreatLow(arr) {
    // var array = arr.process.argv[2];
    // console.log(arr)

    arr.sort(function (a, b) {  //regarder le cours sur arr.sort sur MDN
        return a - b;
    });
    // console.log(arr.sort);
    // console.log(arr)

    secondLow = arr[1];
    secondGreat = arr[arr.length - 2];

    // console.log(secondLow, secondGreat); 
}
secondGreatLow([180, 42, 1, 42]); 