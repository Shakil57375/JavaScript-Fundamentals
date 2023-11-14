/* var num1 = 3;

var sum = function () {
  var num3 = 4;
  return function () {
    return num1 + num3;
  };
};

var myFunc = sum()
console.dir(myFunc) */


function bankAccount(initialBalance){
    var balance = initialBalance;
    return function() {
        return balance
    }
}

var account  = bankAccount(1000)
console.dir(account)