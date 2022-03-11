import {Request, Response, Router} from 'express';
import { firstController } from './controllers/firstController';

const router: Router = Router();

router
    .get('/',firstController.home)
    .get('/books',firstController.getAllBooks)
    .get('/books/:id',firstController.getBookById)
    .post('/books',firstController.insertBook)
    .put('/books/:id',firstController.updateBook)
    .delete('/books/:id',firstController.updateBook)

export {router}