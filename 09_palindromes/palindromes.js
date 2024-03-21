const palindromes = function (str) { 
    let stripString = (str.replace(/[^\w\']|_/g, "")).toLowerCase();
    // Removes all non Alphanumerics and whitespaces. To keep whitespaces, add \s after \w
    let reverseStr = stripString.split('').reverse().join('');
    //splits all letters, reverses order, rejoins.
    
    return reverseStr === stripString ? true : false;
    //shorthand if...else conditional 
     

};

// Do not edit below this line
module.exports = palindromes;
