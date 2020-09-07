var arr = [{
    firstName: 'David',
    surname: 'Beckham',
    job: 'footballer'
}, {
    firstName: 'James',
    surname: 'Corden',
    job: 'tv host'
}, {
    firstName: 'Daniel',
    surname: 'Craig',
    job: 'actor'
}, {
    firstName: 'Graham',
    surname: 'Norton',
    job: 'tv host'
}]

var arr2 = arr.filter(function (elem) {
    if (elem.job === 'tv host') {
        return true
    }
})
console.log(arr2)