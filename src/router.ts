import {Request, Response, Router} from 'express';
import { firstController } from './controllers/firstController';

const router: Router = Router();

router.get('/',firstController.home);

router.get('/books',firstController.getAllBooks);

router.get('/books/:id',firstController.getBookById);

router.post('/books',firstController.insertBook);

router.put('/books/:id',firstController.updateBook);

router.delete('/books/:id',firstController.updateBook);

export {router}