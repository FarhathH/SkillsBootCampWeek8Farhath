import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RateContext, TestRateContext, CurrencyTable, Converter, Money, MoneyFactory} from './money';

let connectionString = 'https://api.frankfurter.app'
let rateContext = new RateContext(connectionString);

const getRate = async(rateContext, query) =>
{
  let currentTable = await rateContext.getRate(query);
  return currentTable;
}

let converter = new Converter();

const exchange = async(converter, rateContext, targetCurrency, money ) =>
{
  if(converter.tables.includes(x => x.currency == money.currency) != true){
    let newTable = await getRate(rateContext, money.currency)
    converter.addTable(newTable)
  }
  let exchangedCurrency = converter.exchange(money, targetCurrency)
  return exchangedCurrency;
}

// let currentTable = await getRate(rateContext, 'usd')

let exchangedCurrency = await exchange(converter, rateContext, 'usd', MoneyFactory.pound(1))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h2>{exchangedCurrency.value}</h2>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
