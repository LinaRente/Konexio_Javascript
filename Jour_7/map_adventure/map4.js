var arr = [1, 2, 3, 4,];

var arrCopy = arr.map(function(num) {
    if (num%2 == 0) { 
        return true; 
    } else {
        return false;
    }
})
console.log(arrCopy)
