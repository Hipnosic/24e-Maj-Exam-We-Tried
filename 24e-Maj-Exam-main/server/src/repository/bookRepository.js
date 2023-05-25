import fs from 'fs';
import crypto from 'crypto';

const books = JSON.parse(fs.readFileSync("./src/config/books.json", "utf8"));
let bookContexts = undefined;

const getBookContext = () => {
  if(bookContexts === undefined) {
    bookContexts = {version: -1, books: Array.from(books)};
  }

  return bookContexts;
}

const getBook = (title) => {
  return getBookContext().books.find(book => book.title == title);
}

const searchBooks = (query) => {
  query = query.toLowerCase();
  console.log(query);
  return getBookContext().books.filter(book => {
    return (book.title + " " + book.author).toLowerCase().includes(query);
  });
}

const getBooks = () => {
  return getBookContext();
}

const addBook = (book) => {
  const ctx = getBookContext();
  ctx.books.push(book);
  ctx.version = crypto.randomUUID();

  return ctx;
}

const patchBook = (oldBook, newBook) => {
  const ctx = getBookContext();
  ctx.books = ctx.books.map(entry => entry.title == oldBook.title ? {...oldBook, ...newBook} : entry);
  ctx.version = crypto.randomUUID();

  return ctx;
}

const deleteBook = (book) => {
  const ctx = getBookContext();
  ctx.books = ctx.books.filter(entry => entry.title !== book.title);
  ctx.version = crypto.randomUUID();

  return ctx;
}

export default {getBooks, searchBooks, getBook, addBook, patchBook, deleteBook };


