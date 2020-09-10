var request = require('request');

function getChuckNorrisFact() {

    request.get('https://api.chucknorris.io/jokes/random', function (err, data, body) {
        
        var json = JSON.parse(body);
        console.log(json.value);
    });
}
getChuckNorrisFact();