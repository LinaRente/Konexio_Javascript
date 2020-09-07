function tablemult(number) {
    var number = process.argv[2];

    if (number > 0) {
        for (var i = 1; i <= 10; i++) {
            total = i * number;
            console.log(number + ' x ' + i + ' = ' + total);
        }
    } else {
        console.log("Error!");
    }
}
tablemult();