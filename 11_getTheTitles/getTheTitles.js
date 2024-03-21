const getTheTitles = function(books) {
    // You'll be given title and author of books. return array of titles

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
