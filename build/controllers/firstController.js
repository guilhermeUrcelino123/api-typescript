"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstController = void 0;
var booksModel_1 = __importDefault(require("../entities/booksModel"));
var FirstController = /** @class */ (function () {
    function FirstController() {
        var _this = this;
        this.updateDataBook = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, postData, post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        postData = req.body;
                        return [4 /*yield*/, booksModel_1.default.findByIdAndUpdate(id, postData, { new: true })];
                    case 1:
                        post = _a.sent();
                        if (post) {
                            res.send(post);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
    }
    FirstController.prototype.home = function (req, res) {
        res.json({
            message: "Bom vindo a api de livros, acesse essa url com /books para ver todos os livros"
        });
    };
    FirstController.prototype.getAllBooks = function (req, res) {
        var books = booksModel_1.default.find(function (err, books) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(books);
            }
        });
    };
    FirstController.prototype.getBookById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, book;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, booksModel_1.default.findById(id)];
                    case 1:
                        book = _a.sent();
                        res.send(book);
                        return [2 /*return*/];
                }
            });
        });
    };
    FirstController.prototype.insertBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, booksModel_1.default.create(req.body)];
                    case 1:
                        _a.sent();
                        res.send("criado com sucesso");
                        return [2 /*return*/];
                }
            });
        });
    };
    FirstController.prototype.updateBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                id = req.params.id;
                booksModel_1.default.findByIdAndUpdate(id, req.body, function (err) {
                    err ? res.send(err) : res.send("alterado com sucesso!");
                });
                return [2 /*return*/];
            });
        });
    };
    FirstController.prototype.deleteBook = function (req, res) {
        var id = req.params.id;
        booksModel_1.default.findByIdAndDelete(id, function (err) {
            err ? res.send(err) : res.send("\u00CCd: ".concat(id, " deletado com sucesso"));
        });
    };
    return FirstController;
}());
exports.firstController = new FirstController();
