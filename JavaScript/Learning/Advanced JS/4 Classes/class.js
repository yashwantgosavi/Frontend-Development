var Vehicle = class Vehicle {
    constructor(numWheels, Price) {
        this.numWheels = numWheels;
        this.price = Price;
    }
    getPrice() {
        return this.price;
    }
}

class Car extends Vehicle {
    constructor(price, numDoors) {
        // parent class constructor
        super(price);
        this.numDoors = numDoors;
    }
    printDescription(){
        super.printDescription();
        console.log('car', this.numDoors);
    }
}

var c = new Car(4);
console.log(c);