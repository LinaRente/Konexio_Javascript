var request = require("request")

request.get("http://data.fixer.io/api/latest?access_key=b3bf580f476dd1fa3e6d1ca802615008", function (err, data, body) {


    function convertiseur(arg1, arg2, arg3) {
        var arg1 = (process.argv[2]);
        var arg2 = (process.argv[3]);

        var arg = arg1.toUpperCase()

        var args = arg2.toUpperCase();
        var arg3 = parseInt(process.argv[4]);

        var json = JSON.parse(body)

        // console.log("monnaie", arg)
        // console.log("json rates", json.rates[arg])
        // console.log("json rates", json.rates[args])

        var currency1 = json.rates[arg]
        currency2 = json.rates[args]
        if (currency1 && currency2) {
            var result = currency1 * arg3 // arg1 EUR=1   * 35
            var result2 = result * currency2 // arg2 USD = 1.183865 * res(35)
            console.log(result2)
            return
        }else if (currency1 !== json.rates || currency2 !== json.rates) { 
            console.log('Error')
            return
        }
    } convertiseur()
})