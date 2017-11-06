(function (window) {
    const johnGreeter = {};
    johnGreeter.name = 'John';
    const greeting = 'Hi';
    johnGreeter.sayHi = function() {
        console.log(`${greeting} ${johnGreeter.name}`);
    };

    window.johnGreeter = johnGreeter;
})(window);

