
export default class StringTransformer{
    backwards(str){
        let backwardStr = "";
        for(let i = str.length; i<0; i--){
                backwardStr = [i];
        }
        return backwardStr;
    }
    
}