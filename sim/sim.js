/*
    Represents the 
*/
export class Sim{
    //attributes for the character
    constructor(name, age, location, friends){
        this.name = name
        this.age = age
        this.location = location
        this.friends = []
    }
    
    //ages a sim up
    haveBirthday(){
        //increases the age by 1
        this.age++
    }
    
    //the parameter allows to add any sim as a friend
    makeNewFriend(newFriend){
       this.friends.push(newFriend)
    }
    
    //for the characters brief life story
    getLifeStory(){
        
        console.log(`Hello, my name is ${this.name}. I am years ${this.age} old and live in ${this.location}`)
    }
}

//instantiate a new object from class
let p1 = new Sim("Farhath", 27, "Speedwell");
let p2 = new Sim("Ennis", 26, "Kingswood");
let p3 = new Sim("Lola", 29, "Fishponds");
let p4 = new Sim("Morticia", 31, "Easton");

//printing the name property using the object
console.log(p1.name)
console.log(p1.age)
console.log(p2.name)
console.log(p2.age)

//age up the sims using the birthday method
p1.haveBirthday()
p2.haveBirthday()

//views age
console.log(p1.age)
console.log(p2.age)

//views life story method
p1.getLifeStory()
p2.getLifeStory()


//views list of friends
console.log(p1.friends)
console.log(p2.friends)

//used method to add Tom as a friend
p1.makeNewFriend("Tom")
console.log(p1.friends)