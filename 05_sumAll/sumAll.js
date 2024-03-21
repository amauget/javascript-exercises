const sumAll = function(min, max){
    
    let sumArray = [min,max]
    sumArray.sort();
    //Orders array from lowest to highest value

    const low = sumArray[0];
    const high = sumArray[1]
    
    if ((!Number.isInteger(low)) || (!Number.isInteger(high) )){
        // checks for non number entries
        return "ERROR"
    }
    else if((low < 0) || (high < 0)){
        return "ERROR"
    }
    sum = 0;
    for (i=low; i<=high; i++){
        sum += i;
    }
    return sum;

    
    
    
}    
// Do not edit below this line
module.exports = sumAll;
