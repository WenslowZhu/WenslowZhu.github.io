var x = "Hello World!";
var message = "in global";
console.log("global: message = " + message);
var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
    function b() {
        console.log("b: message = " + message);
    }
    b();
};
a();
var ob = {
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
