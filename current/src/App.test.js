import { render, screen } from '@testing-library/react';
import App from './App';
import {CurrencyTable, Converter, Money, MoneyFactory} from './money';


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
    let poundCurrency = MoneyFactory.pound(0.79);
    expect(poundCurrency.value).toBe(0.79)
  }
)

test("Dollar has value", ()=>
  {
    let dollarCurrency = MoneyFactory.UsDollar(1.26);
    expect(dollarCurrency.value).toBe(1.26)
  }
)

test("Dollar has value of 15", ()=>
  {
    let dollarCurrency = MoneyFactory.UsDollar(15);
    expect(dollarCurrency.value).toBe(15)
  }
)

test("Money factory can create a currency",()=>
  {
    
    expect(MoneyFactory.pound(15)).toBeInstanceOf(Money)
    expect(MoneyFactory.UsDollar(10)).toBeInstanceOf(Money)
  }
)

test("Pound can be converted into dollar", ()=>
  {
    let pound = MoneyFactory.pound(10);
    let converter = new Converter();
    expect(converter.convertToDollar(pound)).toBeInstanceOf(Money);
  }
)

test("Dollar can be converted into pound", ()=>
  {
    let dollar = MoneyFactory.UsDollar(10);
    let converter = new Converter();
    expect(converter.convertToPound(dollar)).toBeInstanceOf(Money);
  }
)


test("Money has currency",()=>
  {
    let dollar = MoneyFactory.UsDollar(10)
    let pound = MoneyFactory.pound(32)
    expect(dollar.currency).toBe('usd')
    expect(pound.currency).toBe('gbp')

  }
  
)



test("Currency table has values", ()=>
  { 
    expect(currentTable.currency).toBe('usd')
    expect(currentTable.table.gbp).toBe(0.79)
  }
)

test("Converter can store tables",()=>
  {
    let converter = new Converter();
    converter.addTable(currentTable);
    expect(converter.tables.includes(currentTable)).toBe(true)
  }
)

test("gbp can be found by string", ()=>
  {
    expect(currentTable.table['gbp']).toBe(0.79)
  }
)

let values = { //list to view currency and value
  'eur':1.26,
  'gbp' :0.79
  
}

let currentTable = new CurrencyTable('usd',values);

test("Currency can be converted", () =>
  {
    let converter = new Converter();
    converter.addTable(currentTable);
    let dollar = converter.exchange(MoneyFactory.UsDollar(1), 'eur');
    expect(dollar.value).toBe(1.26)
    expect(dollar.currency).toBe('eur')
  }
)

