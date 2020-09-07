
var number = Math.floor(Math.random() * 100) + 1; // ordinateur
function displayPrompt() {

    var prompt = require('prompt');
    prompt.start();
    //var number2 = parseInt(prompt);
    // console.log('test 2', number)
    prompt.get({ name: 'q', description: 'Nombre mistere' }, function (err, result) {
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