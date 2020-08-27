// Je créer un obj avec deux attributs “type” et “name”
// La clef “type” à pour valeur un tableau de 3 chiffres
// La clef “name” à pour valeur un string
// Acceder à l’attribut name et afficher le
// Acceder à l’attribut type et afficher d’une autre manière

var obj = {
    type: [1, 2, 3],
    name: 'maison',
}
console.log(obj.name);
console.log(obj['type']);
console.log(obj.type[1]);

//function letterCountRepeat(str) {
    //     var mot = '-1';
    //     var result = " ";

    //     var string = str.split(' ');

    //     var count = 0;

    //     for (var i = 0; i < string.length; i++) {// parcourir la phrase

    //         for(var j = 0; j< string[i].length;j++){// parcourir chaque lettre

    //             var count = 0;

    //             for(var k = j + 1; k < string[i].length; k++){// pour compter les memes lettres

    //                 if (string[i][j] === string[i][k]){

    //                     count = count + 1;

    //                 }if (count > result) {

    //                     result = count;

    //                     mot = string[i]

    //                 }

    //             }

    //         }
    //     }
    //     return mot;
    //   }console.log(letterCountRepeat("no, word"));

    //   function letterCountRepeat(str) {
    //     var string = str.split(' ');
    //     var result = 0;
    //     var word = "-1";
    //     for (var i = 0; i < string.length; i++) { //parcourir la chaine
    //         for (var j = 0; j < string[i].length; j++) { //parcourir les lettre mot par mot
    //             var cpt = 0;
    //             for (var k = j + 1; k < string[i].length; k++) {//comparer lettre par lettre
    //                 if (string[i][j] === string[i][k]) {
    //                     cpt += 1;
    //                 }
    //                 if (cpt > result){
    //                     result=cpt;
    //                     word=string[i];
    //                 }
    //             }
    //         }
    //     }return word;
    // }
    // console.log(letterCountRepeat("no, world!"));


    // function letterCountRepeat(str) {
    //     var strArray = str.split(' ');
    //     var resultat = {
    //         mot: '',
    //         count: 0
    //     };
    //     // Je parcoure mon array de mots
    //     for (var i = 0; i < strArray.length; i++) {
    //         console.log(strArray[i]);
    //         var objCount = {};
    //         // Je parcoure mon mot charactère par charactère
    //         for (var j = 0; j < strArray[i].length; j++) {
    //             console.log(strArray[i].charAt(j));
    //             var letter = strArray[i].charAt(j);
    //             // objCount['H']
    //             if (objCount[letter]) {
    //                 objCount[letter] += 1;
    //             } else {
    //                 objCount[letter] = 1;
    //             }
    //         }
    //         var arrayKey = Object.keys(objCount)
    //         console.log(objCount)
    //         console.log(arrayKey)
    //         var sumCount = 0;
    //         // Je parcoure l'obj count pour additioner tout les count sup à 1
    //         for (var k = 0; k < arrayKey.length; k++) {
    //             if (objCount[arrayKey[k]] > 1) {
    //                 sumCount += objCount[arrayKey[k]]
    //             }
    //         }
    //         console.log(sumCount)
    // ​
    //         if (resultat.count < sumCount) {
    //             resultat['mot'] = strArray[i];
    //             resultat['count'] = sumCount
    //         }
    //     }
    //     return resultat
    // }
    // ​
    // console.log(letterCountRepeat('Today, is the greatest day ever!'));