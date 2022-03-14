"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSechema = void 0;
var mongoose_1 = require("mongoose");
exports.BookSechema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    preco: { type: Number, required: true },
    marca: { type: String, required: true },
    isbn: { type: String, required: true },
});
var BookCollection = (0, mongoose_1.model)('minhacollections', exports.BookSechema);
exports.default = BookCollection;
