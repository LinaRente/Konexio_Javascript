function passwordGen(num) {
    var min = 65;
    var max = 90;
    var password = '';

    if (num > 15) {
        return 'You password needs to be less than 15';
    }
    if (num < 6) {
        return 'You password needs to be more than 6';
    }

    for (var i = 0; i < num; i++) {
        var index = Math.floor((Math.random() * (max - min) + min));
        password = password + String.fromCharCode(index);
    }

    return password;
}
console.log(passwordGen(10));