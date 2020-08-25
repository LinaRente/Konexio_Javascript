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

    
// prompt

var prompt = require('prompt');

prompt.start();  // start the prompt

prompt.get(['choisi un nombre'], function (number, result) {  // get 2 properties username and email
  if (number != numberRandom ) { return onErr(err); }
  console.log('Command-line input received:');

});

function onErr(err) {
  console.log(err);
  return 1;
}