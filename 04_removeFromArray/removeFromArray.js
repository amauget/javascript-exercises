const removeFromArray = function(array, ...args) {
     // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
