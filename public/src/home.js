function getTotalBooksCount(books) {
  //Looks at the length of the books object to determine total
  const numOfBooks = Object.keys(books).length; 
  console.log(numOfBooks);
  return numOfBooks; 
}

function getTotalAccountsCount(accounts) {
  //Looks at the length of the accounts object to determine total
  const numOfAccounts = accounts.length; 
  console.log(numOfAccounts);
  return numOfAccounts; 
}

function getBooksBorrowedCount(books) {
  //Create a counter variable
  //let numOfBooksBorrowed = 0
  /*
  books.forEach(book => {
    if(book.borrows.returned === false){
      numOfBooksBorrowed++; 
    }
    //console.log(book.borrows.returned === false); 
  })
  */
 
  //Filter through the books for the borrows array 
  //Search for borrowed books that are not return
  //Use length to determine the amount of borrowed books 
  let borrowedBooks = books.filter(book => book.borrows.some(borrowed => borrowed.returned === false)).length;
  //console.log(numOfBooksBorrowed);
  console.log(borrowedBooks); 
  //return counter variable
  return borrowedBooks; 
  //return numOfBooksBorrowed; 

}

function getMostCommonGenres(books) {
  //Create a object 
  let map = {};
  //For each book 
  books.forEach((book) => {
   if (map[book.genre]) {
    map[book.genre]++;
   } else {
    map[book.genre] = 1;
   }
  });
  return Object.entries(map)
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((genreA, genreB) => genreB.count - genreA.count)
   .slice(0, 5);

}



function getMostPopularBooks(books) {
  //return a books object with the name and count of the book
  //Sort the books based on the count 
  return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((firstBook, nextBook) => (firstBook.count < nextBook.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  //Variable to hold the result of the function
  let result = [];
  //For Each author create a variable that will hold the first and last name of the author and a count
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   //For each book determine if the book's author id matches the auther Id
   //If true add to the amount borrowed
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  return result.sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
