"Use strict";

// faire une fonction avec prompt
// faire un random number entre  16 et 21 pour la banque,
//    il s'affichera à la fin du jeu au moment du résultat
// Le joueur démarre avec aucune carte ( score = 0 )
//    faire une variable à valeur null au debut
// faire une boucle avec prompt et faire une condition if pour chaque point (au moins 6 conditions):
//       -Soit tirer une carte possédant une valeur aléatoire entre 1 et 11. Cette valeur sera ajouté à son score. Si après cet ajout son score depasse 21, le joueur perd automatiquement, on l’informe et on dévoile le score de la banque.
//       -Soit passer si son score actuel est plus que 16 (sinon la banque gangera toujours), ce qui mettra fin à la partie.
//       -En fin de partie, 4 options sont possibles :
//       -Si le score du joueur est supérieur à 21, le joueur perd.
//       -Si le score du joueur est 21, il fait un Black Jack et gagne.
//       -Si le score du joueur est supérieur au score de la banque, le joueur gagne.
//       -Si le score du joueur est inférieur au score de la banque, le joueur perd.
//       -Si le score du joueur est égale au score de la banque, le joueur perd.
//       -Dans tous ces cas, on informe le résultat et on dévoile le score de la banque.
//          console.log avec le resultat du random nuber de la banque et qui a gagnés

function randomCardBank(params) {
  var min = 16;
  var max = 21;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

var cardsbank = randomCardBank();

console.log(cardsbank);

function randomCardPlayer(params) {
  var min = 1;
  var max = 10;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

// var cardsPlayer = [{totalInPlayerHands:randomCardPlayer() + randomCardPlayer()}];
// var push = cardsPlayer.push(randomCardBank())
// var entries = Object.entries(cardsPlayer + addOne) ;
var playersCards = randomCardPlayer() + randomCardPlayer();
console.log(playersCards);
// console.log(push);
var plusOneCard = playersCards;
var prompt = require("prompt");

prompt.start();

function displayPrompt() {
  prompt.get(
    {
      name: "q",
      description: "Souhaitez-vous ajouter une carte supplémentaire?",
    },
    function (err, result) {
      if (result.q == "oui") {
        if (result.q == "oui") {
          plusOneCard = plusOneCard + randomCardPlayer();

          // console.log(cards);
          console.log(plusOneCard);

          displayPrompt();
          //  if ( condition) {
          //   displayPrompt();
        } else {
          console.log("La banque a gagné!");
        }
      } else if (result.q == "non") {
        // var resultFinal = function (){
        if (
          (playersCards > cardsbank && playersCards <= 21) ||
          (plusOneCard > cardsbank && plusOneCard <= 21)
        ) {
          console.log("Vous avez gagnez!");
        } else if (
          playersCards >= 16 ||
          playersCards > 21 ||
          plusOneCard >= 16 ||
          plusOneCard > 21
        ) {
          console.log("La banque a gagné!");
        } else {
          console.log("La banque a gagné!");
        }
        // Ecrire ici une var if voir sur digitous si c'est possible
        // if le score du joueur est superieur à la bank est inferieur ou egal à 21 le joeur gagnge
        // else le log indique que c'est la banque qui à gagné
        console.log("Jouez encore une partie!");
      }

    }
  );
}
displayPrompt();
