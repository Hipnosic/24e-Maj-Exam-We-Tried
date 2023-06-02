import bookRepository from "../repository/bookRepository.js";
import adminService from "../service/adminService.js";
import bookService from "../service/bookService.js";

const addBook = (request, response) => {
  const {title, author, quantity} = request.body;
  if(title == undefined || author == undefined || quantity == undefined) {
    return response.status(403).send({error: "Missing either title, author or quantity parameter"});
  }
  const context = adminService.addBook(request.body);

  return response.status(201).send({message: "book added successfully", context});
}

const updateBook = (request, response) => {
  const {previous, current} = request.body;
  if(previous === undefined || current === undefined) {
    return response.status(403).send({error: "Missing either new book or old book"});
  }

  try {
    const context = adminService.updateBook(previous, current);

    return response.send({message: "book updated successfully", context});
  } catch (error) {
    return response.status(403).send({error: error.message});
  }

}

const deleteBook = (request, response) => {
  const context = adminService.deleteBook(request.body);

  return response.send({message: "Book removed successfully", context})
}

const deleteUser = (request, response) => {
  
  try {
    const context = adminService.deleteUser(request.body.username);
    return response.send({message: "User: " + request.body.username + " deleted", context});
  } catch (error) {
    return response.status(403).send({error: error.message});
  }
}

const getAllUsers = (request, response) => {
  const context = adminService.viewUsers();

  return response.send(context);
}

const addAdmin = (request, response) => {
  try {
    const context = adminService.assignAdmin(request.body.username);
    return response.send({message: "User: " + request.body.username + " added as administrator", context});
  } catch (error) {
    return response.status(403).send({error: error.message});
  }
}

export default {addBook, updateBook, deleteBook, deleteUser, getAllUsers, addAdmin};