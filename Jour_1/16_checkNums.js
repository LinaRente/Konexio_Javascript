function checkNums(num1, num2) {
    if(num1 > num2 ) {
        return "num1 is greater than num2"
    }else if(num1 < num2 ) {
        return "num1 is lower than num2"
    }else
    return "num1 is equal to num2"
}
console.log(checkNums(1,2));