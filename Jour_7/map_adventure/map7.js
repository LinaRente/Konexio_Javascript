var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
  }, {
    firstName: 'David',
    surname: 'Craig'
  }]
  
var arr2 = arr.map(person => ({fullName :person.firstName + ' ' + person.surname}));
console.log(arr2)
