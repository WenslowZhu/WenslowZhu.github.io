// function test() {
//     console.log(this);
//     console.log("Hello Coursera!");
//     this.myName = 'Yaakov';
// }
// test();
// console.log(window.myName);

// Function constructors
function Circle (radius: number) {
    // console.log(this);
    this.radius = radius;

    // this.getArea =
    //     function () {
    //         return Math.PI * Math.pow(this.radius, 2);
    //     }
}

Circle.prototype.getArea =
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    }

let myCircle = new Circle(10);
console.log(myCircle);

let myOtherCircle = new Circle(20);
console.log(myOtherCircle);