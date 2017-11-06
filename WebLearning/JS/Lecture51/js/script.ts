// Closure

function makeMultiplier (multipiler: number) {

    function b() {
        console.log(`Multiplier is: ${multipiler}`);
    }
    b();

    return (
        function (x: number) {
            return multipiler * x
        }
    );
}

const doubleAll = makeMultiplier(2);
console.log(doubleAll(10));