var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var arr2 = arr.map(function (elem) {

    arr[0].fullName = arr[0].firstName + ' ' + arr[0].surname;
    arr[1].fullName = arr[1].firstName + ' ' + arr[1].surname;;

    return elem
})
console.log(arr2)


// var arr2 = arr.map(function(currElement, index, array){
//     var nvxObj =  { 
//         firstName: currElement.firstName,
//         surname: currElement.surname,
//         fullname: currElement.firstName + ' ' + currElement.surname
//     }
//     return nvxObj
// })
// console.log(arr2)

// var arr2 = arr.map(function(currElement, index, array){
//     currElement["fullname"] = currElement['firstName'] + ' ' + currElement['surname']
//     return currElement
// })
// console.log(arr2)

// for (var i = 0; i < arr.length; i++) { 
//     arr[i].fullname = arr[i]['firstName'] + ' ' + arr[i].surname
// }
// console.log(arr)