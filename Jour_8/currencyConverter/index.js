var request = require('request');
request.get("http://data.fixer.io/api/latest?access_key=b3bf580f476dd1fa3e6d1ca802615008", function (err, res, body) {
    if (err) {
        console.log(err);
        return;
    }
    var json = JSON.parse(body);
    var arg1 = process.argv[2];
    var arg2 = process.argv[3];
    var arg3 = parseInt(process.argv[4]);
    var argument1 = arg1.toLowerCase();
    var argument2 = arg2.toLowerCase();
    argument1 = json.rates.EUR;
    argument2 = json.rates.USD;
    var result = arg3 * argument1
    var rest = result * argument2
    console.log(rest)
})