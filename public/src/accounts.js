function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB ) => nameA.name.last > nameB.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    for (let y = 0; y < books[i].borrows.length; y++) {
      if (books[i].borrows[y].id === account.id) {
        total += 1
      }
    }
  }
  return total;
}
//It returns an array of books and authors that represents all books _currently checked out_ by the given account.
function getBooksPossessedByAccount(account, books, authors) {
  const filteredBooks = books.filter((book) => {
    const borrow = book.borrows[0];
    return borrow.returned === false && borrow.id === account.id
  })
    let result = filteredBooks.map((book) => {
      let authorObject = authors.find((author) => author.id === book.authorId);
      return { ...book, author: authorObject};
    })
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
