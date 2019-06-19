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
const mongoose_1 = require("mongoose");
const negocio_1 = require("./negocio/negocio");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'mongodb://localhost:27017/biblioteca';
        try {
            const cliente = yield mongoose_1.connect(url, { useNewUrlParser: true });
            console.log('Conectado com sucesso');
            /*
            console.log('Adicionando autores...');
            let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
            console.log(`Autor inserido: ${a1}`);
            let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
            console.log(`Autor inserido: ${a2}`);
    
            console.log('Adicionando livros...');
    
            let l1 = await LivroRepositorio.criar({
                titulo: 'Node.js com TypeScript',
                autores: [a1,a2]
            });
    
            let l2 = await LivroRepositorio.criar({
                titulo: 'Outro Livro',
                autores: []
            });
            console.log(l2);
            */
            /*
            let l3 = await LivroRepositorio.criar({
                titulo: 'Outro Livro',
                autores: [{primeiro_nome:'Eu', ultimo_nome:'Eu'}]
            });
            console.log(l3);
            */
            /*
            console.log('Buscando autores...');
            let autores = await AutorRepositorio.buscar();
            autores.forEach(autor => console.log(autor));
            */
            //console.log('Buscando livros...');
            /*
            let livros = await LivroRepositorio.buscar();
            livros.forEach(l => console.log(`Autores: ${l.autores.map(a => a.primeiro_nome)}`));
            */
            /*
            let livros = await LivroRepositorio.buscarPorAutor("5d03e4fcfa338d07a8f44c93");
            livros.forEach(l => console.log(l));
            */
            console.log('Realizar empréstimos...');
            const emprestimo = yield negocio_1.emprestarLivro('5d03dec2ebc5d65f8df202d3');
            console.log(emprestimo);
            if (cliente && cliente.connection) {
                cliente.connection.close();
            }
        }
        catch (erro) {
            console.log(`Erro: ${erro.message}`);
        }
    });
}
main();
//# sourceMappingURL=index.js.map