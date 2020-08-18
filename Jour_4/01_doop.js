function doop(param1, param2, param3) {
  var param1 = parseInt(process.argv[2]);
  var param2 = process.argv[3];
  var param3 = parseInt(process.argv[4]);

  var params = process.argv.slice(2);
    if(params.length === 3){
        if(param2 == '+' ) {
          result = param1 + param3;
        } else if(param2 == '*') {
          result = param1 * param3;
        } else if(param2 == "/") {
          result = param1 / param3;
        } else if(param2 == '%') {
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


  // console.log(process.argv.slice(2));

  // console.log(parseInt(process.argv.slice(2)));

  // console.log(parseInt(process.argv[2]) + parseInt(process.argv[4])); 

  // console.log(process.argv)


//         for(var i = 2;  i <= process.argv.length; i++) {
//             Number(process.argv[i])
//         }        
// console.log(parseInt(process.argv[2]) + parseInt(process.argv[4]));

