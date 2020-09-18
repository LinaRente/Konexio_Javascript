var arr = [1, 2, 3, 4];

var arr2 = arr.map(isEven)

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
isEven(3);