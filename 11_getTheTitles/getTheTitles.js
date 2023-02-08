const getTheTitles = function(books) {
  let finalBooks = [];

  for (let i = 0; i < books.length; i++) {
    finalBooks[i] = books[i].title;
  }
  return finalBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
