const sumAll = function(numberOne, numberTwo){
    
    
    let array = [numberOne,numberTwo];

    let sortedArray = array.sort();
    //Sorts array from lowest to highest to target in for loop.
    
    let sum = 0;
    if (sortedArray[0]< 0){
        return "ERROR";
    }
    else if(typeof(sortedArray[1])==="string"){
        //Elements sorted will put strings last. Thus the fixed position.
        return "ERROR"
    }
    else if(sortedArray[1].length > 0){
        return "ERROR";
        //again, anything not a numbertype is sorted to the last slot. 
    }
    else{
        for (i = sortedArray[0]; i <=sortedArray[1]; i++){
            sum +=i;
        }
        return sum;
        }
    }
// Do not edit below this line
module.exports = sumAll;
