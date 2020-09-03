var prompt = require('prompt');

var mysteryWord = 'ROUGE';
var lowerCaseWord = mysteryWord.toLowerCase();
var hiddenWord = lowerCaseWord.replace(/./gi, "*");
var position;
var lives = 10;
var guessed = [' '];

function newPendGame() {

    var prompt = require('prompt');
    prompt.start();

    prompt.get({ name: 'letter', description: 'Your guess ' }, function (err, result) {
        var userLetter = (result.letter);

        for (var i = 0; i <= lowerCaseWord.length - 1; i++) {
            // console.log(lowerCaseWord[i]);
            if (lowerCaseWord.charAt(i) === userLetter) {
                guessLetter = lowerCaseWord.indexOf(userLetter);
                hiddenWord = hiddenWord.replace(hiddenWord[i], userLetter);
                console.log(hiddenWord)
                position = lowerCaseWord.indexOf(userLetter);
                console.log(position);
                console.log('Nice choice! Go On!')
            }
        } if (userLetter !== lowerCaseWord.charAt(i)) {
            console.log("try an other letter")
            lives = lives - 1;
            console.log("You Have " + lives)
            if (lives === 0) {
                console.log('Game Over');
                return;
            }

        }
        newPendGame();
    });
}
newPendGame();



