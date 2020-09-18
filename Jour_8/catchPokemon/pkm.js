var request = require("request")

function catchPokemon(id) {
    var urlPkm = 'https://pokeapi.co/api/v2/pokemon/' + id;

    request.get(urlPkm, function (err, res, body) {
        
        var json = JSON.parse(body)
        // console.log(json)
        console.log('ID : ' + json.id)
        console.log('Nom : ' + json.name)
        // console.log('Type : ' + json.types[0].type.name + ', ' + json.types[1].type.name)
        console.log('Taille : ' + json.height)
        console.log('Poids : ' + json.weight)

        var myTypes = json.types.map(function(elm){
            return elm.type.name;
        }).join(',')
        console.log(myTypes);

        var moves = json.moves.map(function(elm){
            return elm.move.name;
        });
        //  console.log(moves)
        // console.log(moves.slice(0, 4));
        var myMoves = moves.slice(0, 4)
        console.log('Attaque : ' + myMoves);
    })
}
catchPokemon(120);