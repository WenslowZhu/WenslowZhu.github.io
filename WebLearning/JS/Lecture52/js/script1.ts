(function (window) {
    const yaakovGreeter = {};
    yaakovGreeter.name = 'Yaakov';
    const greeting = 'Hello';
    yaakovGreeter.sayHello = function () {
        console.log(`${greeting} ${yaakovGreeter.name}`);
    };

    window.yaakovGreeter = yaakovGreeter;
})(window);

