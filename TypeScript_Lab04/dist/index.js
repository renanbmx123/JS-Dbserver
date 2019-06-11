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
const entidades_1 = require("./entidades");
const persistencia_1 = require("./persistencia");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const cofre = new entidades_1.Cofrinho();
        /*cofre.adicionar(new Moeda(1,'1 real'));
        cofre.adicionar(new Moeda(1,'1 real'));
        cofre.adicionar(new Moeda(0.50,'50 centavos'));
        try{
          salvarCofre(cofre,'meuCofrinho.json');
        }catch (erro){
          console.log("Nao foi possivel gravar no arquivo");
          console.log(erro);
        }*/
        /*
        lerCofre('meuCofrinho.json', (erro,cofre) => {
          if (erro){
            console.log('Erro de leitura do arquivo:');
            console.log(erro);
          }else{
            console.log(cofre!.calcularTotal());
          }
        })*/
        // lerCofreAsync('meuCofrinho.json')
        // .then(cofre => console.log(cofre.calcularTotal()))
        // .catch(erro => {
        //   console.log('Erro de leitura do arquivo:');
        //   console.log(erro);
        // });
        try {
            const cofre = yield persistencia_1.lerCofreAsyncAwait('meuCofrinho.json');
            console.log(cofre.calcularTotal());
        }
        catch (erro) {
            console.log('Erro de leitura do arquivo:');
            console.log(erro);
        }
    });
}
main();
//# sourceMappingURL=index.js.map