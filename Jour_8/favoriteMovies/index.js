var request = require('request');

request.get('http://www.omdbapi.com/?i=tt3896198&apikey=4c24e19', function (err, data, body) {
    var json = JSON.parse(body);
    // console.log(json.name)

    if (err) {
        console.log(err)
        return
    }

    for (var i = 0; i <= json.length - 1; i++) {
        console.log('--')
        console.log(json[i].name)
    }
})