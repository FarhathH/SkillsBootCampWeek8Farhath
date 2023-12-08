class Vehicle{//for vehicle attributes
    constructor(brand, model, passengerNo){
        this.brand = brand;
        this.model = model;
        this.passengerNo = passengerNo;
    }
    
    MakeSound(){ //horn
        console.log("Beep")
    }
}

class Car extends Vehicle{ //for car attributes
    constructor(brand, model, passengerNo){
        super(brand, model, passengerNo)
        this.speed = 101
    }
}

class Truck extends Vehicle{ //for truck
    constructor(brand, model, passengerNo){
        super(brand, model, passengerNo); //should enable mother class attributes.
        this.cargo = []
        this.speed = 95
    }
}

//instantiated object
let t1 = new Truck("Scania", "Curtain Side", 2);
let c1 = new Car("Seat", "Hatchback", 5);


//called it
console.log(t1.model)
console.log(c1.brand)

//allowing truck to make a sound
t1.MakeSound()
