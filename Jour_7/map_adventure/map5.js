var arr = ['pan', 'top', 'pal', 'tool'];

var arr2 = arr.map(function(elem){

    return elem.split("").reverse().join("");
//     // var arr = elem.split("");

//     // var arr2 = arr.reverse();

//     // var Array = arr2.join("")
//     // return Array

});
console.log(arr2);