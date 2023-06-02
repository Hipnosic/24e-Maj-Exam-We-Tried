import bookRepository from "../repository/bookRepository.js"
import userRepository from "../repository/userRepository.js";

const purchaseBook = (username, title, quantity) => {
  const book = bookRepository.getBook(title);

  if(book === undefined) {
    let error = new Error("Title match not found");
    error.name = "BookTitleNotFoundException";
    throw error;
  }

  if(book.quantity < quantity) {
    let error = new Error("Not enough quantity");
    error.name = "MissingQuantityException";
    throw error;
  }

  userRepository.addPurchase(username, book);
  return bookRepository.patchBook({...book, quantity: book.quantity - quantity});
}

const viewAll = () => bookRepository.getBooks();

const searchBook = (query) => bookRepository.searchBooks(query);


export default { purchaseBook, viewAll, searchBook };