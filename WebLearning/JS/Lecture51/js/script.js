// Closure
function makeMultiplier(multipiler) {
    function b() {
        console.log("Multiplier is: " + multipiler);
    }
    b();
    return (function (x) {
        return multipiler * x;
    });
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
