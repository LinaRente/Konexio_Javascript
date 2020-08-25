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

