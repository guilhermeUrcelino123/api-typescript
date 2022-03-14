import { Request, Response } from "express";
import BookCollection from "../entities/booksModel";


class FirstController{

    public home(req: Request, res: Response) {
        res.json({
            message: "Bom vindo a api de livros, acesse essa url com /books para ver todos os livros"
        });
    }

    public getAllBooks(req: Request, res: Response) {
    
        let books = BookCollection.find((err:any, books:any)=>{
            if(err){
                res.send(err)
            }else{
                res.send(books)
            }
        })      
    }

    public async getBookById(req: Request, res: Response) {
        const {id} = req.params;       
        let book = await BookCollection.findById(id);        
        res.send(book)        
    }

    public async insertBook(req: Request, res: Response) {        
        
        await BookCollection.create(req.body);
        res.send("criado com sucesso")      
    }  

    public async updateBook(req: Request, res: Response) {

        const {id} = req.params;
        BookCollection.findByIdAndUpdate(id, req.body, (err: any) => {
            err ? res.send(err) : res.send("alterado com sucesso!");
        });     
    }  
    public deleteBook(req: Request, res: Response) {

        const {id} = req.params;
        BookCollection.findByIdAndDelete(id,(err: any) => {
            err ? res.send(err) : res.send(`Ìd: ${id} deletado com sucesso`);
        });            

    }  

    public updateDataBook = async (req: Request, res: Response)=>{
        const id = req.params.id;
        const postData: any = req.body;
        const post = await BookCollection.findByIdAndUpdate(id, postData, { new: true });
        if (post) {
          res.send(post);
        }        
    }  

}

export const firstController = new FirstController();