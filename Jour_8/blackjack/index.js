var prompt = require("prompt");

var playerScore = 0;
var bankScore = Math.floor(Math.random() * (21 - 16) + 16);
prompt.start();


function displayPrompt() {
    prompt.get({ name: 'q', description: 'Card ? (type "y" or "yes" for a new card)' }, function (err, result) {

        var playerAnswer = result.q;

        if (playerAnswer === 'y' || playerAnswer === 'yes') {
            var randomCard = Math.floor(Math.random() * 10) + 1;
            playerScore = playerScore + randomCard;
            console.log("Your score is " + playerScore + ", bank is " + bankScore);
        }
        if (playerScore > 21) {
            console.log('You Lose!')
            return;
        }
        if (playerAnswer === 'p' || playerAnswer === 'pass') {
            if (playerScore === 21) {
                console.log('BLACK JACK !\nYou Win!')
                return;
            }
            if (playerScore > bankScore) {
                console.log('You Win!')
                return;
            }
            if (playerScore < bankScore) {
                console.log('You Lose');
                return;
            }
            if (playerAnswer === bankScore) {
                console.log('You Lose')
                return;
            }
        }
        displayPrompt();
    });
}
displayPrompt();
