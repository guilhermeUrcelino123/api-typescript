import bodyParser from "body-parser";
import express from "express"
import { router } from "./router";
import  connectDB  from "./ressources/connectDB";

export class App{
    
    public server: express.Application;
    
    constructor(){
        this.server = express();
        this.middleware();
        this.router();
        this.parser();   
        this.connDB();     
    }
    private connDB(){
        connectDB;
    }
    
    private middleware(){
        this.server.use(express.json());
    }

    public router(){
        this.server.use(router);
    }

    private parser(){
        this.server.use(bodyParser.json());
    }

}