
var numBase = 2
var puissance = 5
function powerFuncIter(num, power) {
  var result = 1
  for (var i = 0; i < power; i++) {
    //result = result * num; C'est pareil que la ligne en dessous
    result *= num
  }
  return result
}
//console.log(powerFuncIter(2, 5)); C'est pareil que la ligne en dessous
console.log(powerFuncIter(numBase, puissance))