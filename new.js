
function cubeNumber(number) {


    if (typeof number === 'number') {
        "It is a correct input";
    }
    else
    {
     "its incorrect input";
    };
        return number**3;
}

function matchFinder(string1, string2) {
    if(typeof string1 =='string' && typeof string2 == 'string'){
       if (string1.includes(string2)) {
            return true;
       } else {
        return false;
       }

    }else{
        "Both are not String";
    }
}

function sortMaker(arr) {
    let [num1,num2] =arr;
    if(num1<0 || num2<0){
        return "Invalid Input";
    }else{
        if(num1>num2){
            arr =[num1,num2];
            return arr; 
        }else if(num2>num1){
            arr = [num2,num1];
            return arr;
        }else if(num1===num2){
            return "equal";
        }
    }
}

function findAddress(obj) {
    let value ='';
    for(const propertyName in obj){
        value += obj[propertyName]+',';
        
    }
    return value;
}

function canPay(changeArray, totalDue) {
    if (changeArray.length===0) {
        return "the array is empty";
    }
    let sum = 0;
    for (let index = 0; index < changeArray.length; index++) {
        sum += changeArray[index];
    }
    if (sum >= totalDue) {
        return true;
    }else{
        return false;
    }
    
}

