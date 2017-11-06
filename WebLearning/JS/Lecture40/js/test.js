/**
 *
 * @param {string} person
 * @returns {string}
 */
function sayHello(person) {
    return "Hello " + person;
}
var user = "Tom";
console.log(sayHello(user));
var num = 2;
function A() {
    var num = 5;
    B();
}
function B() {
    console.log(num);
}
A();
