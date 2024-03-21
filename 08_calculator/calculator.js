const add = function(num1, num2) {
  const add = num1 + num2;
  return add;
};

const subtract = function(num1, num2) {
	const minus = (num1 - num2);
  //parenthesis matter! 
  return minus;
};

const sum = function(array) {
  if (array.length === 0){
    return 0;
  }
  else{
    let sum = 0;
    for (i of array){
      sum += i;
    }
    return sum;
  }
	
};

const multiply = function(array) {
  if (array.length === 0){
    return 0;
  }
  else{
    let product = 1;
    for (i of array){
      product *= i;
    }
    return product;
  }

};

const power = function(num1, num2) {
  let toPower = num1 ** num2;
  return toPower;
	
};

const factorial = function(number) {
  let multiplier = 1;
  for (i=1; i <= number; i++){
    multiplier *= i;
  }
  return multiplier;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
