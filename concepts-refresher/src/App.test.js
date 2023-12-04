import { render, screen } from '@testing-library/react';
import App from './App';
import {calculator} from './addition.js';



const app = require('./addition') //variable represents app.js file.

let cal = new calculator(4, 6)


//testing functions.
test("display the result of two numbers added together,", () =>
  {
    expect(cal.addition()).toBe(10);
  }
)

//testing functions.
test("display the result of two numbers multiplied,", () =>
  {
    expect(cal.multiply()).toBe(24);
  }
)

test("The calculator inputs can be changed", () =>
  {
    cal.change(10,2)
    expect(cal.augend).toBe(10);
  }
)