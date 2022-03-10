import { Request, Response } from "express";
import BookModel from "../books";


class FirstController{

    public home(req: Request, res: Response) {
        res.json({
            message: "Bom vindo a api de livros, acesse essa url com /books para ver todos os livros"
        });
    }

    public getAllBooks(req: Request, res: Response) {
        
        let books = BookModel.find((err:any, books:any)=>{
            if(err){
                res.send(err)
            }else{
                res.send(books)
            }
        })      
    }

    public async getBookById(req: Request, res: Response) {
        const {id} = req.params;
        console.log(id);
        let book = await BookModel.findById(id);
        console.log(book);
        res.send(book)
        
    }

    public async insertBook(req: Request, res: Response) {

        console.log(req.body);
        
        await BookModel.create({
            title: req.body.title,
            author: req.body.author
        });

        res.send("criado com sucesso")      
    }  

    public async updateBook(req: Request, res: Response) {

        const {id} = req.params;
        BookModel.findByIdAndUpdate(id, req.body, (err: any) => {
            err ? res.send(err) : res.send("alterado com sucesso!");
        });     
    }  
    public delteBook(req: Request, res: Response) {

        const {id} = req.params;
        BookModel.findByIdAndDelete(id,(err: any) => {
            err ? res.send(err) : res.send(`Ìd: ${id} deletado com sucesso`);
        });     
    }  

}

export const firstController = new FirstController();