var prompt = require("prompt");

var playerScore = 0;
var bankScore = Math.floor(Math.random() * (21 - 16) + 16);
prompt.start();


function displayPrompt() {
    prompt.get({ name: 'q', description: 'Card ? (type "y" or "yes" for a new card/ "p" or "pass" for end the game)' }, function (err, result) {

        var playerAnswer = result.q;

        if (playerAnswer === 'y' || playerAnswer === 'yes') {
            var randomCard = Math.floor(Math.random() * 10) + 1;
            playerScore = playerScore + randomCard;
            // console.log('The bank had ' + bankScore);
            console.log('Your Score is ' + playerScore)
        }
        if (playerScore > 21 || playerScore === bankScore) {
            console.log('The bank had ' + bankScore + '!' + ' You Lose!')
            return;
        }
        if (playerScore === 21) {
            console.log('The bank had ' + bankScore + '!' + ' BLACK JACK !\nYou Win!');
            return;
        }
        if (playerAnswer === 'p' || playerAnswer === 'pass') {

            if (playerScore > bankScore) {
                console.log('The bank had ' + bankScore + '!' + ' You Win!')
                return;
            }
            if (playerScore < bankScore) {
                console.log('The bank had ' + bankScore + '!' + ' You Lose');
                return;
            }
        }
        displayPrompt();
    });
}
displayPrompt();
