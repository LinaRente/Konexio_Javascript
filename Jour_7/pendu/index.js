var mots = require('./mots.json');

for (var i = 0; i < mots.length; i++) {
    //   console.log(mots[i]);
}   //liste de mot et boucle qui permet de parcourir toute la liste.
var bienvenue = "Bienvenue Dans Pendu !!"
console.log(bienvenue)
var coup = 10;
// var letterGuess = "";
var randomWord = mots[Math.floor(Math.random() * mots.length)].label;
// var etoile  = randomWord.replace(/./gi,"*");
// cette variable me permet de recuperer un mot aleatoire dans ma liste 
console.log(randomWord);

function penduGame() {

    var prompt = require('prompt');
    prompt.start();

    prompt.get({ name: 'q', description: 'Proposez une lettre' }, function (err, result) {
        for (var i = 0; i < randomWord.length; i++) {
            // console.log(randomWord[i]);
            var letter = randomWord.substr(i, 1)
            // console.log(letter)
            if (randomWord[i] === (result.q)) {
                // letterGuess += letter
                // console.log(letterGuess)
                console.log('continuez')
                // console.log('Il vous reste ,', coup, 'coups a jouer' );

            } else if (randomWord[i] !== result.q) {
                console.log("tas pas trouvez!");
                coup = coup - 1;
                console.log('Il vous reste ,', coup, 'coups a jouer');
            }
            if (coup === 0) {
                console.log("le jeu est terminé, vous êtes perdu !!!");
                return;
            }
        }

        penduGame();
    })

}
penduGame();






// for(var i = randomWord.length-1; i >= 0; i--){
//     console.log(randomWord.charAt(i))
//     if( randomWord.charAt(i) === (result.q)){ 
//         console.log('ok')
//     }
// }

        // for(var i = 0; i < randomWord.length; i++){
        //     for(var j = 0; j < randomWord[i].length; i++){
        //         // console.log(randomWord[i])
        //             if(randomWord[i].charAt(j) === (result.q)){
        //                 console.log('bravo')
        //             }else {
        //                 console.log('non!!')
        //             }

        //     }
            // if(randomWord.charAt(i) === (result.q)){
            //     console.log('bravo continue')
            // } else {
            //     console.log('non! recommence')
            // } 