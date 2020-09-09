var fs = require('fs');
var users = require('./users.json');

// console.log(users);
function fsAdventure () { 
    
    console.log(users[0].name)
    console.log(users[0].email)
    
    console.log("---")
    
    console.log(users[1].name)
    console.log(users[1].email)
}
fsAdventure();
