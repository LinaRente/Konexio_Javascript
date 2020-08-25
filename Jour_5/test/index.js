// var lodash = require('lodash');

// // ce code fonctionne même sans rien installer... ?
// var output = lodash.without([1, 2, 3], 1);
// console.log(output);

// var example = require('./exemple1.js');
// console.log(example);

// var example = require('./exemple2.js');
// console.log(example.sayHelloInFrench());
// console.log(example.sayHelloInEnglish());

// var example = require('./exemple3.js');
// console.log(example.sayHelloInFrench());
// console.log(example.sayHelloInEnglish());

    
<<<<<<< HEAD
// prompt
=======
//prompt

// var prompt = require('prompt');

// prompt.start();  // start the prompt

// prompt.get(['username', 'email'], function (err, result) {  // get 2 properties username and email
//   if (err) { return onErr(err); }
//   console.log('Command-line input received:');
//   console.log('  Username: ' + result.username);  // log results
//   console.log('  Email: ' + result.email);
// });

// function onErr(err) {
//   console.log(err);
//   return 1;
// }

// var prompt = require('prompt');

//   var properties = [
//     {
//       name: 'username',
//       validator: /^[a-zA-Z\s\-]+$/,
//       warning: 'Username must be only letters, spaces, or dashes'
//     },
//     {
//       name: 'password',
//       hidden: true;
//     }
//   ];

//   prompt.start();

//   prompt.get(properties, function (err, result) {
//     if (err) { return onErr(err); }
//     console.log('Command-line input received:');
//     console.log('  Username: ' + result.username);
//     console.log('  Password: ' + result.password);
//   });

//   function onErr(err) {
//     console.log(err);
//     return 1;
//   }


//Utiliser prompt pour la validation, les valeurs par défaut et plus


var prompt = require('prompt');

var schema = {
    properties: {
      nombreMyster: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true
      }
    }
  };

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: email, password
  //
  prompt.get(schema, function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  name: ' + result.name);
    console.log('  password: ' + result.password);
  });


//Appeler prompt plusieurs fois
>>>>>>> 9d466fa88aa6b0cb90a247c5297f5305dcb9f6a0

// var prompt = require('prompt');

<<<<<<< HEAD
prompt.start();  // start the prompt

prompt.get(['choisi un nombre'], function (number, result) {  // get 2 properties username and email
  if (number != numberRandom ) { return onErr(err); }
  console.log('Command-line input received:');

});

function onErr(err) {
  console.log(err);
  return 1;
}
=======
// prompt.start();

// function displayPrompt() {
//   prompt.get({ name: 'q', description: 'Do you like prompt?' }, function (
//     err,
//     result
//   ) {
//     if (result.q === 'y' || result.q === 'n') {
//       console.log('Answer received');
//     } else {
//       displayPrompt();
//     }
//   });
// }

// displayPrompt();
>>>>>>> 9d466fa88aa6b0cb90a247c5297f5305dcb9f6a0
