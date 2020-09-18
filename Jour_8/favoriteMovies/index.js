var request = require("request")
var nombreDepart = 1;
var nombreActuel = nombreDepart;

function movies() {

  request.get('http://www.omdbapi.com/?t=mary+poppins&plot=full&apikey=4c24e19', function (err, res, body) {
    
    var json1 = JSON.parse(body);
    console.log('1');
    console.log('Nom :', json1.Title);
    console.log('Année :', json1.Year);
    console.log('Genre :', json1.Genre);
    console.log('Acteurs :', json1.Actors);
    console.log();
  });

  request.get('http://www.omdbapi.com/?t=the+wizard+of+oz&plot=full&apikey=4c24e19', function (err, res, body) {
    
    var json2 = JSON.parse(body);
    console.log('2');
    console.log('Nom :', json2.Title);
    console.log('Année :', json2.Year);
    console.log('Genre :', json2.Genre);
    console.log('Acteurs :', json2.Actors);
    console.log();
  });

  request.get("http://www.omdbapi.com/?t=inception&plot=full&apikey=4c24e19", function (err, res, body) {
    
    var json3 = JSON.parse(body); 
    console.log('3.');
    console.log('Nom :', json3.Title);
    console.log('Année :', json3.Year);
    console.log('Genre :', json3.Genre);
    console.log('Acteurs :', json3.Actors);
    console.log();
  });


  request.get("http://www.omdbapi.com/?t=avatar&plot=full&apikey=4c24e19", function (err, res, body) {
   
    var json4 = JSON.parse(body);
    console.log('4.');
    console.log('Nom :', json4.Title);
    console.log('Année :', json4.Year);
    console.log('Genre :', json4.Genre);
    console.log('Acteurs :', json4.Actors);
    console.log();
  });


  request.get("http://www.omdbapi.com/?t=captain+marvel&plot=full&apikey=4c24e19", function (err, res, body) {
    
    var json5 = JSON.parse(body);
    console.log('5.');
    console.log('Nom :', json5.Title);
    console.log('Année :', json5.Year);
    console.log('Genre :', json5.Genre);
    console.log('Acteurs :', json5.Actors);
    console.log();
  });

  request.get("http://www.omdbapi.com/?t=harley+queen&plot=full&apikey=4c24e19", function (err, res, body) {

    var json6 = JSON.parse(body);
    console.log('6.');
    console.log('Nom :', json6.Title);
    console.log('Année :', json6.Year);
    console.log('Genre :', json6.Genre);
    console.log('Acteurs :', json6.Actors);
    console.log();
  });


  request.get("http://www.omdbapi.com/?t=star+wars&plot=full&apikey=4c24e19", function (err, res, body) {
    var json7 = JSON.parse(body);
    console.log('7.');
    console.log('Nom :', json7.Title);
    console.log('Année :', json7.Year);
    console.log('Genre :', json7.Genre);
    console.log('Acteurs :', json7.Actors);
    console.log();
  });

  request.get("http://www.omdbapi.com/?t=black+panther&plot=full&apikey=4c24e19", function (err, res, body) {
    var json8 = JSON.parse(body);
    console.log('8.');
    console.log('Nom :', json8.Title);
    console.log('Année :', json8.Year);
    console.log('Genre :', json8.Genre);
    console.log('Acteurs :', json8.Actors);
    console.log();
  });

  request.get("http://www.omdbapi.com/?t=finding+Dory&plot=full&apikey=4c24e19", function (err, res, body) {
    var json9 = JSON.parse(body);
    console.log('9.');
    console.log('Nom :', json9.Title);
    console.log('Année :', json9.Year);
    console.log('Genre :', json9.Genre);
    console.log('Acteurs :', json9.Actors);
    console.log();
  });

  request.get("http://www.omdbapi.com/?t=twilight&plot=full&apikey=4c24e19", function (err, res, body) {
    var json10 = JSON.parse(body);
    console.log('10.');
    console.log('Nom :', json10.Title);
    console.log('Année :', json10.Year);
    console.log('Genre :', json10.Genre);
    console.log('Acteurs :', json10.Actors);
    console.log();
  });

}
movies();
