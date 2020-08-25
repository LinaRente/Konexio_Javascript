
var number = Math.floor(Math.random() * 100) + 1; // ordinateur
function displayPrompt() {

    var prompt = require('prompt');
    prompt.start();
    //var number2 = parseInt(prompt);
    // console.log('test 2', number)
    prompt.get({ name: 'q', description: 'Do you like prompt?'}, function (err, result) {
        //if ((prompt <= 100 && prompt >= 1)){
        // console.log(result)
        // console.log(parseInt(result.q))
        if (number < parseInt(result.q)) {
            console.log("C'est moins !")
        }
        else if (number > parseInt(result.q)) {
            console.log("C'est plus !!")
        } else if (parseInt(result.q) === number) {
            console.log("Bravo, vous avez trouve le nombre mystère !!!");
            return;
        }
        displayPrompt();
        //return err;
    });
}
displayPrompt();



// function displayPrompt() {
 
//     prompt.get({name: "guess", description: 'Devine le nombre mystere?' }, function (
//     result
//   ) {
//     var mysteryNb = Math.floor(Math.random() * 100) + 1;
//     console.log(mysteryNb)
//     if (result.guess === mysteryNb || result.guess < mysteryNb ) {
//       guess = parseInt(prompt.get('Cest plus petit'));
//     } else if(resultat > mysteryNb) {
//       guess = parseInt(prompt.get('Cest plus grand'));
//     } else if(resultat.guess === guess) {
//       guess = parseInt(prompt.get('bravo!'));
//     } else {
//       displayPrompt()
//     }
//   }));
// }

// displayPrompt()

// var max = 100;
// var min = 1;

// var number = Math.floor(Math.random() * 10) + 1;
// //var Numbermystère = (Math.random() * (max - min) + min)

// let guess = prompt.get("Deviner le nombre ?");
// // let nbAttempts = 0;
// // while(guess !== number)
//     if (guess > number) {
//       guess = parseInt(
//         prompt.get("Le nombre mystère est plus petit. Deviner le nombre ?"),
//         10
//       );
//     }
//     else if (guess < number) {
//       guess = parseInt(
//         prompt.get("Le nombre mystère est plus grand. Deviner le nombre ?"),
//         10
//       );
//     }
//     console.log(
//       `Vous avez gagné ! Le nombre mystère était ${number}`
//     );
// // mysteryGame();
  

//   const mysteryNb = Math.floor(Math.random() * 100) + 1;
//   let guess = parseInt(prompt.get("Deviner le nombre ?"), 10);
//   let nbAttempts = 0;
// // while (guess !== mysteryNb) {
// if (guess > mysteryNb) {
//       guess = parseInt(
//         prompt.get("Le nombre mystère est plus petit. Deviner le nombre ?"),
//         10
//       );
//     } else if (guess < mysteryNb) {
//       guess = parseInt(
//         prompt.get("Le nombre mystère est plus grand. Deviner le nombre ?"),
//         10
//       );
//     }
//     nbAttempts++;
  
//   console.log(
//     `Vous avez gagné ! Le nombre mystère était ${mysteryNb}. Vous avez réussi en ${nbAttempts} tentatives.`
//   );


// var prompt = require('prompt');

// prompt.start();

// function displayPrompt() {
//   const mysteryNb = Math.floor(Math.random() * 100) + 1;
//   console.log(mysteryNb)
//   prompt.get({resultat: 'q',  description: 'Devine le nombre mystere?' }, function (
//     resultat
//   ) {
//     if (resultat !== mysteryNb) {
//       console.log('Cest plus petit');
//     } else if(resultat !== mysteryNb) {
//       console.log('Cest plus grand')
//     } else if(resultat === mysteryNb) {
//       console.log()
//     }
//   });
// }

// displayPrompt()
