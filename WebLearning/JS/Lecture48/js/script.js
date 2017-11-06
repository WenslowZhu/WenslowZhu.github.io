// function test() {
//     console.log(this);
//     console.log("Hello Coursera!");
//     this.myName = 'Yaakov';
// }
// test();
// console.log(window.myName);
// Function constructors
function Circle(radius) {
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
    };
var myCircle = new Circle(10);
console.log(myCircle);
var myOtherCircle = new Circle(20);
console.log(myOtherCircle);
