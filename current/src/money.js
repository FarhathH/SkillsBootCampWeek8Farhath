export class Converter{ //class for converting currencies

    convertToDollar(pound){
        return new Money(pound.value)
    }

    convertToPound(UsDollar){
        return new Money(UsDollar.value)
    }

    returnValueDollar(UsDollar){
        return UsDollar.value;
    }

    returnValuePound(pound){
        return pound.value;
    }

    constructor(tables){ //array the info get stored in
        this.tables = [];
    }

   

    exchange(money, currency){

        let exchangeTable = this.tables.find((element) => element.currency === money.currency)
        let exchangeValue = exchangeTable.table[currency]
        return new Money(money.value * exchangeValue, currency)

    } //converts the money

    addTable(table){ //stores the info

        this.tables.push(table);

    }
}

export class TestRateContext{

    constructor(testRates){ //parameter for method

        this.testRates = testRates;
    }

    getRates(query){ //convert uppercase to lowercase
        let currency = "";

        if(this.testRates.base.toLowerCase() === query){

            currency = this.testRates.base.toLowerCase();
            let keyList = Object.keys(this.testRates.rates)
            let key = "";
            let rateMap = new Map();

            for(let i = 0; i < keyList.length; i++){
                key=keyList[i].toLowerCase();
                rateMap.set(key, this.testRates.rates[keyList[i]]);
            }

            let rateObject = Object.fromEntries(rateMap);
            return new CurrencyTable(currency, rateObject);
        }
    }
}

export class RateContext{

    constructor(connectionString){ //parameter for method

        this.connectionString = connectionString;
    }

    async getRate(query){ //convert uppercase to lowercase
        
        let request = await fetch(`${this.connectionString}/latest?from=${query}`)
        let response = await request.json();
        let currency = response.base.toLowerCase();

        let keyList = Object.keys(response.rates)
        let key = "";
        let rateMap = new Map();

        for(let i = 0; i < keyList.length; i++){
            key=keyList[i].toLowerCase();
            rateMap.set(key, response.rates[keyList[i]]);
        }

        let rateObject = Object.fromEntries(rateMap);
        return new CurrencyTable(currency, rateObject);
        
    }
}

export class CurrencyTable{ //stores info
    constructor(currency, table){
        this.currency = currency;
        this.table = table;
    }
}

export class Money{ //class for generating money.
    constructor(value, currency){
        this.value = value;
        this.currency = currency;
    }
}

export class MoneyFactory{ //class for creating money with currency

    static UsDollar(value){
        return new Money(value,'usd');
    }

    static pound(value){
        return new Money(value, 'gbp');
    }

    static euro(value){
        return new Money(value, 'eur');
    }

    static yen(value){
        return new Money(value, 'yen');
    }

    static australianDollar(value){
        return new Money(value, 'yen');
    }

}





