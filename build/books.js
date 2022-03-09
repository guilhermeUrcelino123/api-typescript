"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSechema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect('mongodb+srv://gui:123@cluster0.hkxpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    //.connect('mongodb://localhost:27017/bancoTeste',)
    .then(function () { return console.log("Conectado ao mongo "); })
    .catch(function (err) { return console.log(err); });
exports.BookSechema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var Book = mongoose_1.default.model('minhacollections', exports.BookSechema);
exports.default = Book;
