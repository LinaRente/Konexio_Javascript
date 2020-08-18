function doop(param1, param2, param3) {
    var param1 = parsenInt(process.argv[2]);
    var param2 = parsenInt(process.argv[3]);
    var param3 = parsenInt(process.argv[4]);


    if(param2 == '+' ) {
        result = param1 + param3;
    } else if(param2 == '*') {
        result = param1 * param3;
    }
    return result
}
console.log(doop())
    // console.log(process.argv.slice(2));

    // console.log(parseInt(process.argv.slice(2)));

    // console.log(parseInt(process.argv[2]) + parseInt(process.argv[4])); 

    // console.log(process.argv)