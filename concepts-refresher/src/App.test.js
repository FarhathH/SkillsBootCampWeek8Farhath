import { render, screen } from '@testing-library/react';
import App from './App';
import {calculator} from './addition.js';
import {StringTransformer} from './stringtransformer.js';

//reading the file that's being tested
const app = require('./addition') //variable represents app.js file.

//put in nums to be calculated wiht the objects.
let cal = new calculator(4, 6)


//testing functions.
test("Calculator can display the result of two numbers added together,", () =>
  {
    expect(cal.addition()).toBe(10);
  }
)

//testing functions.
test("Calculator can display the result of two numbers multiplied,", () =>
  {
    expect(cal.multiply()).toBe(24);
  }
)

//testing functions.
test("The calculator inputs can be changed", () =>
  {
    cal.changeInput(11,3)
    expect(cal.addend).toBe(3);
  }
)

//testing functions.
test("The calculator can return the sum of it's inputs divided", () =>
  {
    cal.changeInput(20,2)
    expect(cal.divide()).toBe(10);
  }
)

//testing function
test( "Calculator can return the greater of two number",() =>
  {
    cal.changeInput(5,6)
    expect(cal.greater()).toBe(6)
  }
)

//testing function
test("Calculator can return a cubed numner", () =>
  {
    
    cal.changeInput(6,6)
    expect(cal.cube()).toBe(216)
  }
)

//testing function
test("The calculator can return the square root of a number",() =>
  {
    cal.changeInput(36,4)
    expect(cal.sqrRoot()).toBe(6)
  }
)

test( "String is returned backwards", () =>
  {
    let tranformer = new StringTransformer;
    expect(transformer.backwards("hello")).toBe("elloh")
  }
)