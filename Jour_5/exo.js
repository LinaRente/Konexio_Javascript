function mysteryGame() {
    const mysteryNb = Math.floor(Math.random() * 100) + 1;
    let guess = parseInt(prompt.get("Deviner le nombre ?"), 10);
    let nbAttempts = 0;
while (guess !== mysteryNb) {
if (guess > mysteryNb) {
        guess = parseInt(
          prompt.get("Le nombre mystère est plus petit. Deviner le nombre ?"),
          10
        );
      } else if (guess < mysteryNb) {
        guess = parseInt(
          prompt.get("Le nombre mystère est plus grand. Deviner le nombre ?"),
          10
        );
      }
      nbAttempts++;
    }
    console.log(
      `Vous avez gagné ! Le nombre mystère était ${mysteryNb}. Vous avez réussi en ${nbAttempts} tentatives.`
    );
  }
  
  mysteryGame();
  





//   var prompt = require('prompt');


// prompt.start();

// function checkAttempts(mysteryNb, lastNbAttempts, nbAttempts) {
//   if (nbAttempts > lastNbAttempts) {
//     alert(
//       `Vous avez gagné ! Le nombre mystère était ${mysteryNb}. Vous avez réussi en ${nbAttempts} tentative(s). C'est moins bien que la dernière fois.`
//     );
//   } else {
//     alert(
//       `Vous avez gagné ! Le nombre mystère était ${mysteryNb}. Vous avez réussi en ${nbAttempts} tentative(s). C'est mieux bien que la dernière fois.`
//     );
//   }
// }

// function mysteryGame() {
//   let play = true;
//   let nbPlay = 1;
//   let lastNbAttempts = 0;

//   while (play === true) {
//     const mysteryNb = Math.floor(Math.random() * 10) + 1;
    
//     let guess = parseInt(prompt.get("Deviner le nombre ?"), 10);
//     let nbAttempts = 0;
  
//     while (guess !== mysteryNb) {
//       if (guess > mysteryNb) {
//         guess = parseInt(
//           prompt.get("Le nombre mystère est plus petit. Deviner le nombre ?"),
//           10
//         );
//       } else if (guess < mysteryNb) {
//         guess = parseInt(
//           prompt.get("Le nombre mystère est plus grand. Deviner le nombre ?"),
//           10
//         );
//       }
//       nbAttempts++;
//     }
//     if (nbPlay === 1) {
//       console.log(
//         `Vous avez gagné ! Le nombre mystère était ${mysteryNb}. Vous avez réussi en ${nbAttempts} tentative(s).`
//       );
//     } else {
//       checkAttempts(mysteryNb, lastNbAttempts, nbAttempts);
//     }
//     lastNbAttempts = nbAttempts;
//     nbPlay++;
//     play = confirm("Voulez vous encore jouer ?");
//   }
// }
// mysteryGame()
