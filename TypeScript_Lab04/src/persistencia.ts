import {promises} from 'fs';
import {Cofrinho, Moeda}from './entidades';
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

export async function lerCofreAsync(nomeArq: string): Promise<Cofrinho>{
  return promises.readFile(nomeArq,'utf-8')
  .then(dados => JSON.parse(dados))
  .then(obj => {
    const cofre = new Cofrinho();
    for(let i=0; i<obj._moedas.length;i++){
      cofre.adicionar(new Moeda(obj._moedas[i]._valor,obj._moedas[i].nome));
    }
    return cofre;
  });
}

export async function lerCofreAsyncAwait(nomeArq: string): Promise<Cofrinho>{
  const dados = await promises.readFile(nomeArq,'utf-8');

  try{
    const obj = JSON.parse(dados);
    const cofre = new Cofrinho();
    for(let i=0; i<obj._moedas.length;i++){
      cofre.adicionar(new Moeda(obj._moedas[i]._valor,obj._moedas[i].nome));
    }

    return cofre;
  }catch(erro){
    throw erro;
  }
}
