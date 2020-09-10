var request = require('request');

request.get('https://pokeapi.co/api/v2/pokemon/1', function (err, data, body) {
    var json = JSON.parse(body);
    console.log(json);
    // console.log("ID :", json.id)
    // console.log("Nom :", json.name)
    // console.log("Taille :", json.height)
    // console.log("Poids :", json.weight)
})


