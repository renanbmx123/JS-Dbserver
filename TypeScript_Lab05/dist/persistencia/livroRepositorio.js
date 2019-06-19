"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const livroModel_1 = require("./livroModel");
const autorModel_1 = require("./autorModel");
class LivroRepositorio {
    static criar(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            return livroModel_1.LivroModel.create(livro);
        });
    }
    static buscar() {
        return __awaiter(this, void 0, void 0, function* () {
            //return LivroModel.find().populate({path:'autores', model:AutorModel}).exec();
            return livroModel_1.LivroModel.find().populate('autores', autorModel_1.AutorModel).exec();
        });
    }
    static buscarPorAutor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return livroModel_1.LivroModel.where('autores').equals(id).populate('autores', autorModel_1.AutorModel).exec();
        });
    }
    static buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return livroModel_1.LivroModel.findById(id).exec();
        });
    }
}
exports.LivroRepositorio = LivroRepositorio;
//# sourceMappingURL=livroRepositorio.js.map