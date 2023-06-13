function findAccountById(accounts, id) {
  //Set a variable to the account that matches the given id 
  let accountId = accounts.find((account) => account.id === id);
  console.log(accountId);
  return accountId; 
}

function sortAccountsByLastName(accounts) {
  //Set a variable to the sorted name based on the last name 
  let sortByName = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  console.log(sortByName); 
  return sortByName; 
}

function getTotalNumberOfBorrows(account, books) {
  
  return totalNumberofBorrows(account, books); 
}

function totalNumberofBorrows(accountId, books){
  //Total the amount of borrows
  const { id } = accountId;
  let total = 0; 

  for (let book in books) {
    const { borrows } = books[book];
    borrows.forEach((element) => {
      if (element.id === id) {
        total++;
      }
    });
  }
  /*
  books.forEach((book) => book.borrows.forEach((borrow) => accountId === borrow.id && total++)); 
  console.log(total); 
  */ 
  return total; 
}

function getBooksPossessedByAccount(account, books, authors) {
  let books_taken = [];
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      books_taken.push(book);
    }
  })
  console.log(...books_taken);
  books_taken.forEach(book=>{
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  console.log(...books_taken);
  return books_taken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
