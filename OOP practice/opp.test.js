import {Sim, BankAccount} from './oop';

// //function to add digits
// function addThree(num1, num2, num3){
//     return num1 + num2 * num3
// }

// //values being tested
// let num1 = 1
// let num2 = 2
// let num3 = 3

// //variables to use in test
// let failedMessage = "You suck"
// let expectedOutput = 6
// let actualOutput = addThree(num1, num2, num3)

// //the test which should have worked
// console.assert(actualOutput == expectedOutput, failedMessage)

//instantiate a new object from class
// let testSim = new Sim("Dummy", 26, "Yokai");

// //use to check if output is correct
// let expectedOutput = 27
// let actualOutput = testSim.haveBirthday();

// //test
// console.assert(actualOutput == expectedOutput, "it didn't work")

//made for testing the lifeStory method
let expectedStory = `Hello, my name is Dummy. I am years 26 old and live in Yokai`
let realStory = testSim.getLifeStory()

//test
console.assert(realStory == expectedStory, "it didn't work")