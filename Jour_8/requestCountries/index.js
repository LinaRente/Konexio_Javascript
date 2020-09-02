var request = require('request');

request.get('https://restcountries.eu/rest/v1/all', function (err, data, body) {
    // console.log(err);
    // console.log(data);
    // console.log(body);
    var json = JSON.parse(body);
    // console.log(json);
    for (var i = 0; i <= json.length -1; i++) {
        console.log('--')
        console.log(json[i].name)
    }
})
