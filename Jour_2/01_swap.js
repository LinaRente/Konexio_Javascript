var array;

function swap(first, second) {

    array = first;

    first = second;
    second = array;

    return [first, second];
}
console.log(swap(25, 30));


