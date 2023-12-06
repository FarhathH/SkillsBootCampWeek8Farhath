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

    constructor(tables){
        this.tables = [];
    }

   

    exchange(money, currency){
        let exchangeTable = this.tables.find((element) => element.currency === money.currency)
        let exchangeValue = exchangeTable.table[currency]
        return new Money(money.value * exchangeValue, currency)
    }

    addTable(table){
        this.tables.push(table);
    }
}

export class CurrencyTable{
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

export class MoneyFactory{ //class for creating money
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





