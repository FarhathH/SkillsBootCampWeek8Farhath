export class Converter{
    convertToDollar(pound){
        return new Dollar(pound.value)
    }

    returnValue(pound){
        return pound.value;
    }
}

export class Money{
    constructor(value){
        this.value = value;
    }
}

export class MoneyFactory{
    dollar(value){
        return new Dollar(value);
    }
}


export class Pound extends Money{

}

export class Dollar extends Money{
    
}


