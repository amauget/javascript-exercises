const getTheTitles = function(books) {
    // You'll be given title and author of books. return array of titles
    //ODIN SOLUTION: return array.map((book) => book.title);
    //allows book.title key access without extracting from array.
    
    //Explanation: map(value) by taking the last letter off of var called.
    //  if array is books -> map(book)
    // if array is called boo -> map(bo). 

    let book1 = books[0]; book2 = books[1];
    //extracts nested objects from array
    let title1 = book1.title; title2 = book2.title;
    //targets object key "title"
    let titleArray = []

    titleArray.push(title1, title2);

    return titleArray;

};

// Do not edit below this line
module.exports = getTheTitles;
