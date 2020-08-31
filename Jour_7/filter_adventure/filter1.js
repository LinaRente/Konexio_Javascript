var arr = ['a', 'b', 'a', 'c', 'a', 'd'];

var arr2 = arr.filter(function(array) {
    if(array === 'a'){
        return true
    }
})
console.log(arr2)


// var arr = ['a', 'b', 'a', 'c', 'a', 'd']

// var arr2 = arr.filter(function(elem){
//     return elem === "a"
// })
// console.log(arr2)