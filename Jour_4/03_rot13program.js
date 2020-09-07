//cree une fonction avec un parametre "param"
// cree une variable pour initier mon process.argv a la position 2
// une variable pour contenir le string
//console.log pour verifier
//faire une boucle pour parcourir mon parametre.
//une condition
// return


function rot13Program(param) {
    var param = process.argv[2];
    var result = "";
    for (var i = 0; i < param.length; i++) {
        var tableAscii = param[i].charCodeAt();
        // console.log(tableAscii)
        if (tableAscii >= 65 && tableAscii <= 77 || tableAscii >= 97 && tableAscii <= 109) {
            result += String.fromCharCode(tableAscii + 13);
        } else if (tableAscii >= 78 && tableAscii <= 90 || tableAscii >= 110 && tableAscii <= 122) {
            result += String.fromCharCode(tableAscii - 13)
        } else {
            result += param[i];
        }
    }
    return result;

}
console.log(rot13Program());