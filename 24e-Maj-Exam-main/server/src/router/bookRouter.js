import express from 'express';
import bookController from '../controller/bookController.js';

const router = express.Router();

router.post("/books", bookController.buyBook);

export default router;