function findAuthorById(authors, id) {
  //Set the author Id to the given author id 
  let authorId = authors.find((...author) => author.id === id);
  console.log(authorId);
  return authorId;   
}

function findBookById(books, id) {
  //Set the book Id to the given book id 
  let bookId = books.find((book) => book.id === id);
  console.log(bookId);
  return bookId;
}

function partitionBooksByBorrowedStatus(books) {
  //Create Arrays to handle the available books and unavialable books
  let availableBooks = [];
  let unavailableBooks = [];
  const bookStatus = []; 

  //For each book determine if the book is returned and then add it to the unavailable book array
  books.forEach((book) => {
    const isBookReturned = book.borrows[0].returned
    if(isBookReturned){
      unavailableBooks.push(book);
    }else{
      //If the the book is returned the add it to the avaialable book array
      availableBooks.push(book); 
    }
  });

  //Add the available books abd unavailable books to the book status and return it 
  bookStatus.push(availableBooks);
  bookStatus.push(unavailableBooks); 
  return bookStatus; 
  
}

function getBorrowersForBook(book, accounts) {
  //create the array to hold the result of the function 
  let result = [];
  //create a variable to hold the accounts that have borrowed books out
  let borrowArray = book.borrows;  
  borrowArray.forEach(borrow=>{
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
    obj['returned'] =  borrow.returned;
    result.push(obj);
  })
  console.log(result);
  return sortBorrows(result); 
}

function sortBorrows(result){
  return result.slice(0,10); 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
