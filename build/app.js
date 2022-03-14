"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var router_1 = require("./router");
var connectDB_1 = __importDefault(require("./ressources/connectDB"));
var App = /** @class */ (function () {
    function App() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.router();
        this.parser();
        this.connDB();
    }
    App.prototype.connDB = function () {
        connectDB_1.default;
    };
    App.prototype.middleware = function () {
        this.server.use(express_1.default.json());
    };
    App.prototype.router = function () {
        this.server.use(router_1.router);
    };
    App.prototype.parser = function () {
        this.server.use(body_parser_1.default.json());
    };
    return App;
}());
exports.App = App;
