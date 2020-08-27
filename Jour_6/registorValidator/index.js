var prompt = require('prompt');

var properties = [
    {
        name: 'username',
        validator: /^[a-zA-Z0-9-]+$/,
    },
    {
        name: 'password',
        validator: /^(?=.*\d)[0-9a-zA-Z\s\-\,\.]{6,}$/,
        hidden: true,
        replace: '*',
    },
    {
        name: 'email',
        format: 'email',
    }
];


prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { 
        return onerror(err);
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}









// var prompt = require('prompt');

// var properties = [
//     {
//         name: 'username',
//         Validator: /^[a-z0-9-]+$/gi,
//     },
//     {
//         name: 'password',
//         Validator: /^[0-9a-zA-Z]{6,}$/,
//         hidden: false,
//         replace: '*',
//     },
//     {
//         name: 'email',
//         // format: 'email',
//     }
// ];


// prompt.start();

// prompt.get(properties, function (err, result) {

//     var user = properties[0].pass;
//     result = ;

//     var userPass = properties[1].password;
//     result = ;
    
    // if(err) {
    //     console.log('bravo');
    // } else if (user === result){
    //     console.log('ok')
    // }
//     if (userPass !== result) {
//         console.log('error')
//     }else if(userPass === result){
//         console.log('ok')
//     }
// });

// /^[a-zA-Z0-9-]+$

  //     console.log('Command-line input received:');
    //     console.log('  Username: ' + result.username);
    //     console.log('  Password: ' + result.password);
    //     console.log('  email: ' + result.email);

// function onErr(err) {
//     console.log(err);
//     return 1;
// }

// (?=.*\d)
// \s\-\,\./