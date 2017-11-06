const x: string = "Hello World!";

const message: string = "in global";

console.log("global: message = " + message);

const a = function () {
    let message: string = "inside a";
    console.log("a: message = " + message);

    function b () {
        console.log("b: message = " + message);
    }

    b();
};

a();

const ob = {
    name: 'asb',
    age: 12,
    ttt: {
        link: 'asd',
        sad: true
    }
};

console.log(ob.age);
ob.age = 22;
console.log(ob.age);
console.log(ob.ttt.sad);
