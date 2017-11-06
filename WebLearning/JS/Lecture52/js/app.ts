yaakovGreeter.sayHello();
johnGreeter.sayHi();

// Immediately Invoked Function Ecpression
// IIFE
(function (name: string) {
    console.log(`Hello ${name}!`);
})('Coursera!');