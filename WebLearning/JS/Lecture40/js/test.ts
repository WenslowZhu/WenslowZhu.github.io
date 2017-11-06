/**
 *
 * @param {string} person
 * @returns {string}
 */
function sayHello(person: string): string{
    return "Hello " + person
}

const user: string = "Tom";

console.log(sayHello(user));

let num: number = 2;

function A() {
    let num: number = 5;
    B();
}

function B(){
    console.log(num);
}

A();