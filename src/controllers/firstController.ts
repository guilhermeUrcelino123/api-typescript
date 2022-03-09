import { Request, Response } from "express";
import Book, { BookSechema } from "../books";
import * as bodyParser from 'body-parser';

 class FirstController{

    public home(req: Request, res: Response) {
        res.json({
            message: "Bom vindo a api de livros, acesse localhost:3000/books para ver todos os livros"
        });
    }

    public allBooks(req: Request, res: Response) {
        
        let books = Book.find((err:any, books:any)=>{
            if(err){
                res.send(err)
            }else{
                res.send(books)
            }
        })        
       
    }



    public async insertBookTeste(req: Request, res: Response) {

        console.log(req.body);
        
        await Book.create({
            title: req.body.title,
            author: req.body.author
        });

        res.send("criado com sucesso")
        
       
       
    }




    
}

export const firstController = new FirstController();