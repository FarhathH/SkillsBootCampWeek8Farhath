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


class Truck extends Vehicle{ //for truck
    constructor(brand, model, passengerNo){
        super(brand, model, passengerNo); //should enable mother class attributes.
        this.cargo = []
    }
}

//instantiated object
let t1 = new Truck("Scania", "Curtain Side", 2);

//called it
console.log(t1.model)

//allowing truck to make a sound
v1.MakeSound()
