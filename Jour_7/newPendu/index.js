var prompt = require('prompt');
var mots = require('./mots.json');


var mysteryWord = mots[Math.floor(Math.random() * mots.length)].label;
console.log(mysteryWord);
var lowerCaseWord = mysteryWord.toLowerCase();
var hiddenWord = lowerCaseWord.replace(/./gi, "*");
var lives = 10;

prompt.start();


function newPendGame() {


    prompt.get({ name: 'letter', description: 'Your guess ' }, function (err, result) {
        var userLetter = result.letter;
        var word = [];
        for (var i = 0; i <= lowerCaseWord.length - 1; i++) {
            // console.log(lowerCaseWord[i]);
            if (userLetter === lowerCaseWord.charAt(i)) {
                hiddenWord = hiddenWord.substring(0, i) + userLetter + hiddenWord.substring(i + 1)
                console.log(hiddenWord)
                word = userLetter;
            }
        }
        if (word !== userLetter) {
            console.log("try an other letter")
            console.log(hiddenWord)
            lives = lives - 1;


            if (lives === 0) {
                console.log('Game Over');
                console.log('Your Word Was ' + mysteryWord.toUpperCase())
                return;
            }
            console.log("You Have " + lives)
        }
        if (hiddenWord === lowerCaseWord) {

            console.log("You win!!")
            return
        }
        newPendGame();
    });
}
newPendGame();