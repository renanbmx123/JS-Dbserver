"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
//
// try{
//   fs.writeFile('dados2.txt','mais um...',(err)=>{
//     if(err !== null){
//       throw err;
//     }
//     console.log('arquivo escrito com sucesso!');
//   })
//   console.log('continuei a execucao');
// }catch(erro){
//   console.log(`erro: ${erro.name} - ${erro.message}`)
// }
/*
fs.readFile('pessoa.json','utf-8', (erro,dados) => {
  if (erro !== null){
    console.log('Erro de leitura de arquivo');
  }else{
    try{
      const obj = JSON.parse(dados);
      console.log(obj);
    }catch(erro){
      console.log('Arquivo JSON inválido');
    }
  }
});*/
function lerArquivosAsync(nomeArq) {
    return new Promise((resolve, reject) => {
        try {
            let dados = fs.readFileSync(nomeArq, 'utf-8');
            resolve(dados);
        }
        catch (erro) {
            reject(erro);
        }
    });
}
let obj = lerArquivosAsync("pessoa.json");
console.log(obj);
//# sourceMappingURL=index.js.map