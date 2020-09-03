var request = require('request');

request.get('http://www.omdbapi.com/?i=tt3896198&apikey=4c24e19', function (err, data, body) {
    var json = JSON.parse(body)
    console.log(json)
})