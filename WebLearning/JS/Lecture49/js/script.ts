// Object literals and "this"

let literalCircle = {
    radius: 10,

    getArea: function () {
        const self = this;
        console.log(this);

        let increaseRadius = function () {
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());