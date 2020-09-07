var arr = [1, 'a', 2, 'b'];

var arr2 = arr.filter(function (elem) {
    if (typeof elem != 'number') {
        return true
    }

})
console.log(arr2);