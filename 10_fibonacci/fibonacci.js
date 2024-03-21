const fibonacci = function(input) {
    // fibonacci sequence is where each number is the sum of the 2 preceding nums
    // F(n) = F(n-1) + F(n-2)
    
    let a = 1, b = 0, temp;
    //temp used for updating variables
    let seq = [0];

    let max = parseInt(input);
    //Allows for str entries
    
    if (max < 0){
        return "OOPS";
    }
    else if(max <= 1){
        return max;
        // eliminates math hole in while loop since max = value at that place up to 1.
    }
    else{
        while(seq[max-1] === undefined){
        //Continues until array fills the position of max-1
        temp = a;
        a = a + b;
        b = temp;
        seq.push(a);
        }
    return seq[max-1];
    }
    
}
   
// Do not edit below this line
module.exports = fibonacci;
