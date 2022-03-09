import mongoose from 'mongoose';

mongoose
    .connect('mongodb+srv://gui:123@cluster0.hkxpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',)
    //.connect('mongodb://localhost:27017/bancoTeste',)
    .then( ()=> console.log("Conectado ao mongo ") )
    .catch((err) => console.log(err));

export const BookSechema = new mongoose.Schema({
    title: {type:String, required: true},
    author: {type:String, required: true}

})

const Book = mongoose.model('minhacollections', BookSechema);
export default Book;