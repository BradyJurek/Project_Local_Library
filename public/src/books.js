function findTotal(count) {
  return count.length
}

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let totalBooks = [];
  const returnedBooks = books.filter((book) => !book.borrows[0].returned);
  const loanedBooks = books.filter((book) => book.borrows[0].returned);
  totalBooks.push(returnedBooks)
  totalBooks.push(loanedBooks)
  return totalBooks
}

function getBorrowersForBook(book, accounts) {
  const totalCheckouts = book.borrows.map((borrow) => {
    const user = accounts.find((account) => account.id === borrow.id)
    return {...borrow, ...user}
  })
  return totalCheckouts.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
