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
const livroRepositorio_1 = require("../persistencia/livroRepositorio");
const emprestimoRepositorio_1 = require("../persistencia/emprestimoRepositorio");
function emprestarLivro(idLivro) {
    return __awaiter(this, void 0, void 0, function* () {
        const umLivro = yield livroRepositorio_1.LivroRepositorio.buscarPorId(idLivro);
        if (umLivro !== null) {
            let emprestimo = {
                livro: umLivro,
                dataRetirada: new Date(Date.now()),
                dataEntrega: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            };
            return yield emprestimoRepositorio_1.EmprestimoRepositorio.criar(emprestimo);
        }
        else {
            throw new Error('Livro não encontrado');
        }
    });
}
exports.emprestarLivro = emprestarLivro;
//# sourceMappingURL=negocio.js.map