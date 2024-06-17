// prototype = template
function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;

}

Vehicle.prototype.getPrice = function () {
    return this.price;
}
Vehicle.prototype.color = 'black';

var vehicle1 = new Vehicle(2, 500000);
console.log(vehicle1.color);

// dunderProto
    // __proto__
// Object.getPrototypeOf()
//  vehicle1.hasOwnProperty('price);