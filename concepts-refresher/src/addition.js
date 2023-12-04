//Main class with functions/methods being tested
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

    changeInput(x, y){
        

        this.augend = x;
        this.addend = y;

        
        
    }

    divide(){
        return this.augend / this.addend;
    }

   greater(){
    if(this.augend > this.addend){
        return this.augend;
    }else{
        return this.addend;
    }
   }

   cube(){
        
        return (this.augend * this.augend) * this.augend;
    }

    sqrRoot(){
        return this.augend = Math.sqrt(this.augend);
    }

}




//being exported to the app.test file
module.exports = {calculator}; 
