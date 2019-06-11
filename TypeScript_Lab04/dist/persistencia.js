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
const fs_1 = require("fs");
const entidades_1 = require("./entidades");
// Buscar funcao json na internet/
/*
export function salvarCofre(cofre: Cofrinho, nomeArq: string): void{
  const json = JSON.stringify(cofre);
  fs.writeFile(nomeArq, json, erro => {
    if(erro){
      throw erro;
    }
  });
}*/
// Nao fazer, calback dentro de calback.
/*
export function abrirCofre(cofre:Cofrinho,nomeArq:string, callback(erro:Error, dados:any) => void): void{
  fs.readFile(nomeArq,'utf-8' ,(erro,dados) => {
    if(erro){
      throw erro;
    }
    const obj = JSON.parse(dados);
  });
}
*/
/*
export function lerCofre(nomeArq: string,
  callback:(erro:Error|null, dados?: Cofrinho) => void): void{
    fs.readFile(nomeArq, 'utf-8', (erro, dados) => {
      if (erro !== null){
        callback(erro);
      }
      try{
        const obj = JSON.parse(dados);
        const cofre = new Cofrinho();
        for(let i=0; i<obj._moedas.length;i++){
          cofre.adicionar(new Moeda(obj._moedas[i]._valor,obj._moedas[i].nome));
      }
      callback(null,cofre);
    }catch(e){
      callback(e);
    }

  });
}
*/
function lerCofreAsync(nomeArq) {
    return __awaiter(this, void 0, void 0, function* () {
        return fs_1.promises.readFile(nomeArq, 'utf-8')
            .then(dados => JSON.parse(dados))
            .then(obj => {
            const cofre = new entidades_1.Cofrinho();
            for (let i = 0; i < obj._moedas.length; i++) {
                cofre.adicionar(new entidades_1.Moeda(obj._moedas[i]._valor, obj._moedas[i].nome));
            }
            return cofre;
        });
    });
}
exports.lerCofreAsync = lerCofreAsync;
function lerCofreAsyncAwait(nomeArq) {
    return __awaiter(this, void 0, void 0, function* () {
        const dados = yield fs_1.promises.readFile(nomeArq, 'utf-8');
        try {
            const obj = JSON.parse(dados);
            const cofre = new entidades_1.Cofrinho();
            for (let i = 0; i < obj._moedas.length; i++) {
                cofre.adicionar(new entidades_1.Moeda(obj._moedas[i]._valor, obj._moedas[i].nome));
            }
            return cofre;
        }
        catch (erro) {
            throw erro;
        }
    });
}
exports.lerCofreAsyncAwait = lerCofreAsyncAwait;
//# sourceMappingURL=persistencia.js.map