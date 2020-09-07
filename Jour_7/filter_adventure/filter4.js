var arr = [1, 2, 3, 4];

var arr2 = arr.filter(function (num) {
    if (num % 2 == 0) {
        return true
    }
})
console.log(arr2)