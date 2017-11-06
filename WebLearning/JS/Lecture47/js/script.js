// function changePrimitive(primValue) {
//     console.log("in changePrimitive...");
//     console.log("before:");
//     console.log(primValue);
//
//     primValue = 5;
//     console.log("after:");
//     console.log(primValue);
// }
//
// let value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);
function changeObject(objValue) {
    console.log("in changeObject...");
    console.log("before:");
    console.log(objValue);
    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
}
var value = { x: 7 };
changeObject(value);
console.log("after changeObject, orig value:");
console.log(value);
