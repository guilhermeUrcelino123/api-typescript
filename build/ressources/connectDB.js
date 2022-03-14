"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
//const URL_DB:string = "mongodb://localhost:27017/bancoTeste";
var URL_DB = "mongodb+srv://gui:123@cluster0.hkxpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
function connectDB() {
    (0, mongoose_1.connect)(URL_DB)
        .then(function () { return console.log("Conectado ao mongo "); })
        .catch(function (err) { return console.log(err); });
}
exports.default = connectDB();
