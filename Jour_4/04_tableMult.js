function tablemult(number) {
    var number = process.argv[2];
    var total;
    for(var i = 1; i <= 10; i++){
        total = i * number;
        console.log(number + ' x ' + i + ' = ' + total);
    }

}
tablemult();