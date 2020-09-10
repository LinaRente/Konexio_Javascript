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

        console.log(nombreActuel++ + ".", "\n", "Title :" + " " + json1.Title, "\n", "Year :" + " " + json1.Year, "\n", "Genre :" + " " + json1.Genre, "\n", "Actors :" + " " + json1.Actors
                ,"\n", nombreActuel++ + ".", "\n", "Title :" + " " + json2.Title, "\n", "Year :" + " " + json2.Year, "\n", "Genre :" + " " + json2.Genre, "\n", "Actors :" + " " + json2.Actors
                    , "\n", nombreActuel++ + ".", "\n", "Title :" + " " + json3.Title, "\n", "Year :" + " " + json3.Year, "\n", "Genre :" + " " + json3.Genre, "\n", "Actors :" + " " + json3.Actors
                    , "\n", nombreActuel++ + ".", "\n", "Title :" + " " + json4.Title, "\n", "Year :" + " " + json4.Year, "\n", "Genre :" + " " + json4.Genre, "\n", "Actors :" + " " + json4.Actors
      )});
    });
  });
})