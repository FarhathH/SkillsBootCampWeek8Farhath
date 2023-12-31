/*
Similar to polymorphism, but used the static keyword for calling objects by syntax, rather than instantiating.
*/
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
        this.cargo = [] //carries total cargo
        
    }
    
      MakeSound(){ //horn
        console.log("BEEP BEEP BEEP")
    }
    
    addCargo(newCargo){ //adding cargo for truck
        this.cargo.push(newCargo)
    }
}

class VehicleFactory{ // saves the trouble of instantiating objects
    static Car(brand, model){
        return new Car(brand, model, 4)
    }
    
    static Bus(brand, model){
        return new Bus(brand, model, 40)
    }
    
    static Truck(brand, model){
        return new Truck(brand, model, 2)
    }
    
}

//managed to make an object by using syntax
let firstOb = VehicleFactory.Car("Lexus", "Saloon")

//checking is it works
console.log(firstOb.model)
console.log(firstOb)