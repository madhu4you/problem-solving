/**
 * Create a Object model for Car
 */
class Wheel {
    constructor(name) {
        this.name = name;
    }
    getName = function () {
        return this.name;
    }
}
class Car {
    constructor() {
        this.make = make;
        this.year = year;
        this.wheels = [
            new Wheel("Front Left"),
            new Wheel("Front Right"),
            new Wheel("Back Left"),
            new Wheel("Back Right")
        ];
        this.seats = seats;

        this.run = () => {

        }
    }
}