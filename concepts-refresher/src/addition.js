export class calculator{
    constructor(augend, addend){
        this.augend = augend
        this.addend = addend
    }

    addition(){
        return this.augend + this.addend;
    }

    multiply(){
        return this.augend * this.addend;
    }

    change(){
        
    }

}





module.exports = {calculator}; //being tested
