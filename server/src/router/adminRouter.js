import express from 'express';
import adminController from '../controller/adminController.js';

const router = express.Router();

router
  .get("/users", adminController.getAllUsers)
  .post("/books", adminController.addBook)
  .put("/users", adminController.addAdmin)
  .put("/books", adminController.updateBook)
  .delete("/books", adminController.deleteBook)
  .delete("/users", adminController.deleteUser);


export default router;