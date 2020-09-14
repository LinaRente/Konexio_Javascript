var request = require('request');

request.get('https://pokeapi.co/api/v2/pokemon/1', function (err, data, body) {
    var json = JSON.parse(body);
    // console.log(json);

    console.log("ID :", json.id)
    console.log("Nom :", json.name)
    console.log("Taille :", json.height)
    console.log("Poids :", json.weight)

    // console.log(json.moves)
    // var attacks = json.moves;
    // console.log(attacks)
    // request.get("https://pokeapi.co/api/v2/move/14/", function (err, data, body) {
    // var json2 = JSON.parse(body);
    // console.log(json2);
    // console.log(json2.name)
    // })
});
