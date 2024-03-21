
const convertToCelsius = function(f) {
  //PROVIDED SOLUTION:
  // return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
  // multiplies decimal val by 10, rounds to whole int, then divides by 10 to 
  //give tenth position if exists.

  let celsius =((f - 32) * (5/9)).toFixed(1)
        if(celsius[-1] === "0"){
           return parseInt(celsius);
        }
        else{
             
            return parseFloat(celsius);
        }
        
};

const convertToFahrenheit = function(c) {
    
  let fahrenheit = (((9/5 * c) + 32)).toFixed(1);
  if(fahrenheit[-1] === "0"){
    return parseInt(fahrenheit);
   
  }
 else{
     return parseFloat(fahrenheit);
     
 }

 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
