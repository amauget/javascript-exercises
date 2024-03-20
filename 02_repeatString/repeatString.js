
const repeatString = function(greet,times) {
    if (times < 0){
        return "ERROR"
    }
    else{
        return greet.repeat([times]);
    }
};

// Do not edit below this line
module.exports = repeatString;
