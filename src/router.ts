import {Request, Response, Router} from 'express';
import { firstController } from './controllers/firstController';

const router: Router = Router();

router.get('/',firstController.home);

router.get('/books',firstController.allBooks);

router.post('/books',firstController.insertBookTeste);


export {router}