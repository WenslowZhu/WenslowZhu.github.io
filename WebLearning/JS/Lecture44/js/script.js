// Default values
/**
 *
 * @param {string} sideDish default = "whatever!"
 */
function orderChickenWith(sideDish) {
    if (sideDish === void 0) { sideDish = "whatever!"; }
    // sideDish = sideDish || "whatever!";
    // if (sideDish === undefined) {
    //     sideDish = "whatever!";
    // }
    console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();
