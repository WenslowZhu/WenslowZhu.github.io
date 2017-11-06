// Functions are First-Calss Data
// Functions are objects
function multiply(x, y) {
    return x * y;
}
multiply.version = 'v1.0.0.0';
console.log(multiply.version);
//Function factory
function makeMultuplier(multiply) {
    var myFunc = function (x) {
        return multiply * x;
    };
    return myFunc;
}
var multiplyBy3 = makeMultuplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultuplier(2);
console.log(doubleAll(100));
//Passing functions as arguments
function doOperationOn(x, operation) {
    return operation(x);
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);
