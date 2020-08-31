var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var arr2 = arr.map(function(elem) {
    
    arr[0].fullName = arr[0].firstName + ' ' + arr[0].surname;
    arr[1].fullName = arr[1].firstName + ' ' + arr[1].surname;;

    return elem
})    
console.log(arr2)