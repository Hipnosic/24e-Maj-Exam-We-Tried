import bookService from "../service/bookService.js";

const getAllBooks = (request, response) => {
  const context = bookService.viewAll(response.locals.contextUUID);
  return response.send(context);
}

const searchBook = (request, response) => {
  const context = bookService.searchBook(request.body.query);
  return response.send(context);
}

const buyBook = (request, response) => {
  const {title, quantity} = request.body;

  if(title == undefined || quantity == undefined) {
    return response.status(403).send({error: "Missing either title or quantity in body"});
  }
  try {
    const context = bookService.purchaseBook(response.locals.username, title, quantity);

    return response.status(200).send({message: `Purchased book ${title} successfully`, quantity, context})
  } catch(error) {
    return response.status(403).send({error: error.message});
  }
}

export default {getAllBooks, searchBook, buyBook};