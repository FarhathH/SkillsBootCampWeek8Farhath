class Vehicle{//for vehicle attributes
    constructor(brand, model, passengerNo){
        this.brand = brand;
        this.model = model;
        this.passengerNo = passengerNo;
    }
    
  
}

class Bus extends Vehicle{ //class for bus attributes
    speed = 23
    constructor(brand, model, passengerNo){
        super(brand, model, passengerNo)
    }
}

class Car extends Vehicle{ //for car attributes
    
    speed = 56
    
    constructor(brand, model, passengerNo){
        super(brand, model, passengerNo)
    }
    
    addSpeed(newSpeed){
        this.speed += newSpeed
    }
}

class Truck extends Vehicle{ //for truck attributes

    speed = 40
    constructor(brand, model, passengerNo){
        super(brand, model, passengerNo); //should enable mother class attributes.
        this.cargo = []
        
    }
    
      MakeSound(){ //horn
        console.log("BEEP BEEP BEEP")
    }
    
    addCargo(newCargo){ //adding cargo for truck
        this.cargo.push(newCargo)
    }
}

//instantiated objects
let t1 = new Truck("Scania", "Curtain Side", 2);
let c1 = new Car("Seat", "Hatchback", 5);
let b1 = new Bus();

//called it
console.log(t1.model)
console.log(c1.brand)

//allowing truck to make a sound
t1.MakeSound()

//checking amount of cargo
console.log(t1.cargo.length)

t1.addCargo("Crystal Meth")

//checking amount of cargo again
console.log(t1.cargo.length)
console.log(t1.cargo)

//checking speed
console.log(t1.speed)
console.log(c1.speed)
c1.addSpeed(45)
console.log(c1.speed)