// // class Pessoa{
// //     nome:string;
// //     idade:number;
// //     constructor(n:string,i:number){
// //         this.idade = i;
// //         this.nome = n;
// //     }
// // }

// // let p1:Pessoa;
// // p1 = new Pessoa("Jhon Dow",22);
// // console.log(p1);
// // p1.idade = 30;
// // console.log(p1);

// // class PessoaV2{
// //      nome:string;
// //      idade:number;
// //     constructor(n:string,i:number){
// //         this.idade = i;
// //         this.nome = n;
// //     }
// // }
// // let p2:PessoaV2;
// // p2 = new PessoaV2("Jhon Dow",22);
// // console.log(p2);
// class PessoaV3 {
//     //private nome:string;
//     //private idade:number;
//     constructor(
//         private nome:string,
//         private _idade:number){}
//     getNome():string{
//         return this.nome;
//     }
//     get idade():number{
//         return this._idade;
//     }
//     set idade(n:number){
//         this._idade = n;
//     }
// }
//
// let p3 = new PessoaV3("Jhon Doe",23);
// console.log(p3);
// console.log(p3.getNome());
// p3.idade = 30;
// console.log(p3.idade);
//
// class Produto{
//     constructor(
//         private _nome:string,
//         private _preco:number
//     ){ }
//     get nome():string{
//         return this._nome;
//     }
//     get preco():number{
//         return this._preco;
//     }
//     set preco(p:number){
//         this._preco = p;
//     }
//     toString():string{
//         return `[nome=${this._nome}, nome=${this._preco}]`;
//     }
//
// }
//
// class ProdutoPerecivel extends Produto{
//     constructor(nome:string,
//         preco:number,
//         private _dataValidade:Date)
//     {
//         super(nome,preco);
//     }
//     get dataValidade():String{
//         return this._dataValidade.toLocaleDateString();
//     }
//     toString():string{
//         return super.toString() + `[dataValidade=${this._dataValidade.toLocaleDateString()}]`;
//     }
// }
//
// let prod1 = new Produto("prod1", 1.99);
// console.log(prod1);
// let prod2 = new ProdutoPerecivel("prod2",1.99,new Date(2019,11,20));
// console.log(prod2);
// console.log(prod2.toString());
/*
abstract class FiguraBidimensional{
  constructor(
    private _centrox:number,
    private _centroy:number
  ){}

  get x():number{
    return this._centrox;
  }
  get y():number{
    return this._centroy;
  }
  abstract area():number;
}

class Circulo extends FiguraBidimensional{
  constructor(
    centrox:number,
    centroy:number,
    private _raio:number){
      super(centrox,centroy);
    }
    area(): number{
      return Math.PI * this._raio **2;
    }
    get raio():number{
      return this._raio;
    }
}

let fig1:FiguraBidimensional = new Circulo(1,1,3);
console.log(fig1);
console.log(fig1.area());
console.log(fig1.x);
console.log((<Circulo>fig1).raio);

interface Desenhavel{
  x:number,
  y:number
}

function desenhar(d:Desenhavel){
  console.log(`x=${d.x} y=${d.y}`);
}

desenhar(fig1);
*/

interface Predicado<T>{
  (item:T):boolean;
}

function filtrar<T> (array:T[], filtro:Predicado<T>):T[]{
  let resultado:T[] = [];
  for(let i = 0;i < array.length;i++){
    if(filtro(array[i])){
      resultado.push(array[i]);
    }
  }
  return resultado;
}

console.log(filtrar([0,10,1,3,2],i => i%2 === 0));
