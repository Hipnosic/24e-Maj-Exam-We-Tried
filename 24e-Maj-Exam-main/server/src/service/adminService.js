import bookRepository from "../repository/bookRepository.js"
import userRepository from "../repository/userRepository.js";

const addBook = (book) => bookRepository.addBook(book);
const deleteBook = (book) => bookRepository.deleteBook(book);
const updateBook = (old, newBook) => {
  const book = bookRepository.getBook(old.title);
  if(book == undefined) {
    let error = new Error("Failed to find book");
    error.name = "BookNotFoundException";
    throw error;
  }

  return bookRepository.patchBook(book, newBook);
};
const viewUsers = () => userRepository.getUsers();
const deleteUser = (username) => {
  const user = userRepository.getUser(username);
  if(user == undefined) {
    let error = new Error("Username not identified as a user");
    error.name = "UserNotFoundException";
    throw error;
  }

  return userRepository.deleteUser({username})
};
const assignAdmin = (username) => {
  const user = userRepository.getUser(username);
  if(user == undefined) {
    let error = new Error("Username not identified as a user");
    error.name = "UserNotFoundException";
    throw error;
  }

  return userRepository.patchUser(username, {...user, role: "ADMIN"});
}

export default {addBook, deleteBook, updateBook, viewUsers, deleteBook, assignAdmin, deleteUser}