function doop(param1, param2, param3) {
  var param1 = parseInt(process.argv[2]);
  var param2 = process.argv[3];
  var param3 = parseInt(process.argv[4]);

  var params = process.argv.slice(2);
  if (params.length === 3) {
    if (param2 == '+') {
      result = param1 + param3;
    } else if (param2 == '*') {
      result = param1 * param3;
    } else if (param2 == "/") {
      result = param1 / param3;
    } else if (param2 == '%') {
      result = param1 % param3;
    } else if (param2 == '-') {
      result = param1 - param3;
    }
  } else {
    return "Error!"
  }
  return result

}
console.log(doop())
