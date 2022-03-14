import {Schema, model, connect} from 'mongoose';

export const BookSechema = new Schema({
    nome: {type:String, required: true},
    descricao: {type:String, required: true},
    preco: {type:Number, required: true},
    marca: {type:String, required: true},
    isbn: {type:String, required: true},
})

const BookCollection = model('minhacollections', BookSechema);
export default BookCollection;