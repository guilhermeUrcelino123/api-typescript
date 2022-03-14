import {connect} from 'mongoose';

//const URL_DB:string = "mongodb://localhost:27017/bancoTeste";

const URL_DB:string = "mongodb+srv://gui:123@cluster0.hkxpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

function connectDB() {
    connect(URL_DB,)
    .then( ()=> console.log("Conectado ao mongo ") )
    .catch((err) => console.log(err));
}

export default connectDB()