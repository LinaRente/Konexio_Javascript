function tablemult(number) {
    var total;
    for (var i = 1; i <= 10; i++) {
        total = i * number;
        console.log(number + ' x ' + i + ' = ' + total);
    }

}
tablemult(process.argv[2]);