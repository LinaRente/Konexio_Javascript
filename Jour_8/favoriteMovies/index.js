var request = require("request")
var nombreDepart = 1;
var nombreActuel = nombreDepart;

request.get('http://www.omdbapi.com/?t=titanic&plot=full&apikey=4c24e19', function (err, res, body) {
  var json1 = JSON.parse(body);

  request.get('http://www.omdbapi.com/?t=violetta&plot=full&apikey=4c24e19', function (err, res, body) {
    var json2 = JSON.parse(body);
    
    request.get("http://www.omdbapi.com/?t=twilight&plot=full&apikey=4c24e19", function (err, res, body) {
      var json3 = JSON.parse(body);

      request.get("http://www.omdbapi.com/?t=avatar&plot=full&apikey=4c24e19", function (err, res, body) {
        var json4 = JSON.parse(body);

        console.log(nombreActuel++ + ".")
        console.log("Title :" + " " + json1.Title)
        console.log("Year :" + " " + json1.Year)
        console.log("Genre :" + " " + json1.Genre)
        console.log("Actors :" + " " + json1.Actors)
        console.log(nombreActuel++ + ".")

        console.log("Title :" + " " + json2.Title)
        console.log("Year :" + " " + json2.Year)
        console.log("Genre :" + " " + json2.Genre)
        console.log("Actors :" + " " + json2.Actors)
        console.log(nombreActuel++ + ".")

        console.log("Title :" + " " + json3.Title)
        console.log("Year :" + " " + json3.Year)
        console.log("Genre :" + " " + json3.Genre)
        console.log("Actors :" + " " + json3.Actors)
        console.log(nombreActuel++ + ".")

        console.log("Title :" + " " + json4.Title)
        console.log("Year :" + " " + json4.Year)
        console.log("Genre :" + " " + json4.Genre)
        console.log("Actors :" + " " + json4.Actors)
        
      });
    });
  });
})