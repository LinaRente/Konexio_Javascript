var arr = [{
    firstName: 'David',
    surname: 'Beckham'
}, {
    firstName: 'James',
    surname: 'Corden'
}, {
    firstName: 'Daniel',
    surname: 'Craig'
}, {
    firstName: 'Graham',
    surname: 'Norton'
}]

var arr2 = arr.filter(function (elem) {
    //    return elem.firstName[0] === 'D';

    if (elem.firstName.substring(0, 1) === 'D') {
        return true
    }
})
console.log(arr2)