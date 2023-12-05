import { render, screen } from '@testing-library/react';
import App from './App';
import {Currency, Pound, Dollar, Converter, Money} from './money';


/*

  Test samples to check if components work.

*/
test("Money has value", ()=>
  {
    let coin = new Money(50);
    expect(coin.value).toBe(50)
  }
)

test("Pound has value", ()=>
  {
    let poundCurrency = new Pound(0.79);
    expect(poundCurrency.value).toBe(0.79)
  }
)

test("Dollar has value", ()=>
  {
    let dollarCurrency = new Dollar(1);
    expect(dollarCurrency.value).toBe(1)
  }
)

test("Dollar has value of 15", ()=>
  {
    let dollarCurrency = new Dollar(15);
    expect(dollarCurrency.value).toBe(15)
  }
)

test("Pound can be converted into dollar", ()=>
  {
    let pound = new Pound(10);
    let converter = new Converter();
    expect(converter.convertToDollar(pound)).toBeInstanceOf(Dollar);
  }
)

test( "converter returns value", ()=>
  {
    let converter = new Converter();
    let pound = new Pound(10)

    expect(converter.returnValue(pound)).toBe(10);
  }
)

test("Money factiry can create a dollar",()=>
  {
    moneyFactory = new MoneyFactory();
    expect(moneyFactory.dollar(10)).toBeInstanceOf(Dollar)
  }
)

