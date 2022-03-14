import {Request, Response, Router} from 'express';
import { firstController } from './controllers/firstController';

const router: Router = Router();

router
    .get('/books',firstController.getAllBooks)
    .get('/books/:id',firstController.getBookById)
    .post('/books',firstController.insertBook)
    .put('/books/:id',firstController.updateBook)
    .patch('/books/:id',firstController.updateDataBook)
    .delete('/books/:id',firstController.deleteBook)

router
    .get('/',firstController.home)

export {router}