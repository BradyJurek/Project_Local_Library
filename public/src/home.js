function getTotal(count) {
  return count.length
}

function getTotalBooksCount(books) {
  return getTotal(books)
}

function getTotalAccountsCount(accounts) {
  return getTotal(accounts)
}

function getBooksBorrowedCount(books) {
  const filter = books.filter((book) => !book.borrows[0].returned)
  return filter.length
}

function getMostCommonGenres(books) {
  let arrayGenres = books.reduce((acc, book) => {
    const bookGenre = book.genre
    if (acc[bookGenre]) {
      acc[bookGenre] += 1
    } else {
      acc[bookGenre] = 1
    }
    return acc
  }, {});

  const allGenres = Object.keys(arrayGenres);
  let sorted = allGenres.sort((a, b) => {
    if (arrayGenres[a] > arrayGenres[b]) {
      return -1
    } else if (arrayGenres[a] < arrayGenres[b]) {
      return 1
    } else {
      return 0
    }
  })
let result = []
for (let i = 0; i < sorted.length; i++) {
  result.push({name: sorted[i],
  count: arrayGenres[allGenres[i]]})
  }
  return result.slice(0, 5)
}

function getMostPopularBooks(books) {
  //Counts the Books using the reduce method
  let count = books.reduce((acc, book) => {
    acc[book.title] = book.borrows.length;
    return acc;
  },{});
  //pushes the book title and the count variable into a object and assigns it to result
  let result = books.reduce((acc, book) => {
    acc.push({name: book.title, count: count[book.title]});
    return acc;
  }, []);
  //sorts the result so it goes higher to lower
  result.sort((bookA, bookB) =>
  (bookA.count < bookB.count ? 1 : -1))
//returns the result and cuts it down to only 5 objects using the slice method
  return result.slice(0,5)
}


function getMostPopularAuthors(books, authors) {
  //Matches author and AuthorID together then adds their first and last name together 
  let author = authors.reduce((acc, author) => {
    acc[author.id] = author.name.first + " " + author.name.last;
    return acc;
  }, {});
  //counts the total number of borrows the specific author has
  let count = books.reduce((acc, book) => {
    acc[book.authorId] = book.borrows.length;
    return acc;
  }, {})
  //combines the two above reduce statements into the result variable
  let result = books.reduce((acc, book) => {
    acc.push({name: author[book.authorId], count: count[book.authorId]});
    return acc;
  }, []);
  //sorts the result array from highest to lowest
  result.sort((authorA, authorB) =>
  (authorA.count < authorB.count ? 1 : -1))
  //returns the result and slices it down to 5 max items in the array
  return result.slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
