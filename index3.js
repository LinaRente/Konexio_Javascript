// var foo;
// var bar = true;

// if(foo && bar) {
//     console.log('je suis dans le bloc')
// } else {
//     console.log('je suis pas dans le bloc')
// }

// FALSE ET TRUE => FALSE
// TRUE ET FALSE => FALSE
// FALSE ET FALSE => FALSE
// TRUE ET TRUE => TRUE
// FALSE OU TRUE => TRUE
// TRUE OU FALSE => TRUE
// FALSE OU FALSE => FALSE
// TRUE OU TRUE => TRUE

// Une variable sans valeur est False.


// var obj =  {
//     name: 'fatima',
//     description: 'je ne revise pas mes objets'
// }

// console.log(obj.description);
// console.log(obj['name']);


var arr1 = [2, 3];
var arrCopy = arr1.map(function(elm, index, arrayInit) {

    console.log(elm) // au premier tour de boucle elm renvoie le tableau [2, 3]
    console.log(index)
    console.log(arrayInit)
    console.log('\n')
    return elm + 1  // il a ajoute + 1
})
console.log(arrCopy);


var index = require("./index1");

test()