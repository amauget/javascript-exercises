//README detail: leap year is defined as year % 4 = 0 unless start of century.
// if start of century, year % 400 = 0 to be leap

const leapYears = function(year) {

    const leap = (((year % 4 === 0) &&(year % 100 !== 0) || (year % 400 === 0)));
                //First condition accounts for non century. Second accounts for century.
                
    return leap;
}

// Do not edit below this line
module.exports = leapYears;
