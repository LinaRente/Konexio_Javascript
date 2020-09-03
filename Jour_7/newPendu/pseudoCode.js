//Je défini mon mot mysterieux (par example ROUGE)
//Je crée un mot de la même longuer mais avec des * pour chaque lettre (mot étoile) (si le mot est ROUGE alors: *****)
//Je défini combien le nombre de coups pour le jeu
//Je demande a l'utilisateur une lettre (prompt?)

    //Je parcours mon mot pour vérifie si la lettre est dans le mot mysterieux
        //Pour chaque lettre du mot mysterieux par laquel je passe, je vérifie si elle est pareil que la lettre introduite par l'utilisateur 
        //Si la condition au dessus s'est vérifie:
            //Je dévoile la lettre dans le mot étoile dans la même position qu'elle est dans mon mot mysterieux (je perds pas les lettres déjà dévoilés)
            //Je sauvegarde le fait que la lettre en question est dans le mot

    //Si la lettre n'est pas dans le mot
        //J'indique que la lettre se trouve pas dans le mot
        //Je diminue le nombre de coups
        //Si le nombre de coups est 0, je fini le jeu
    //Si mon mot mysterieux est égal à mon mot *
        //J'indique à l'utilisateur qu'il a gagné
    //Si non
        //J'indique à l'utilisateur le mot *
        //Je redemande une nouvelle lettre





//         var prompt = require('prompt');

// var mysteryWord = 'ROUGE';
// var lowerCaseWord = mysteryWord.toLowerCase();
// var hiddenWord = lowerCaseWord.replace(/./gi, "*");
// var position;
// var lives = 10;
// var guessed = [' '];

// function newPendGame() {

//     var prompt = require('prompt');
//     prompt.start();

//     prompt.get({ name: 'letter', description: 'Your guess ' }, function (err, result) {
//         var userLetter = (result.letter);

//         for (var i = 0; i <= lowerCaseWord.length - 1; i++) {
//             // console.log(lowerCaseWord[i]);
//             guessLetter = lowerCaseWord.indexOf(userLetter);

//             if (lowerCaseWord.charAt(i) === userLetter) {

//                 hiddenWord = hiddenWord.replace(hiddenWord[i], userLetter);
//                 console.log(hiddenWord)
//                 console.log(guessed)
//                 position = lowerCaseWord.indexOf(userLetter);
//                 console.log(position);
//                 console.log('Nice choice! Go On!')

//             } else if (userLetter !== lowerCaseWord[i]) {
//                 console.log("try an other letter")
//                 lives = lives - 1;
//                 console.log("You Have " + lives)
//                 if (lives === 0) {
//                     console.log('Game Over');
//                     return;
//                 }

//             }

//         }
//         newPendGame();
//     });
// }
// newPendGame();



