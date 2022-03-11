"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var firstController_1 = require("./controllers/firstController");
var router = (0, express_1.Router)();
exports.router = router;
router
    .get('/', firstController_1.firstController.home)
    .get('/books', firstController_1.firstController.getAllBooks)
    .get('/books/:id', firstController_1.firstController.getBookById)
    .post('/books', firstController_1.firstController.insertBook)
    .put('/books/:id', firstController_1.firstController.updateBook)
    .delete('/books/:id', firstController_1.firstController.updateBook);
