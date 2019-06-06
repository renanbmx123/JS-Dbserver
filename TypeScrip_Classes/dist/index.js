"use strict";
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
class PessoaV3 {
    //private nome:string;
    //private idade:number;
    constructor(nome, _idade) {
        this.nome = nome;
        this._idade = _idade;
    }
    getNome() {
        return this.nome;
    }
    get idade() {
        return this._idade;
    }
    set idade(n) {
        this._idade = n;
    }
}
let p3 = new PessoaV3("Jhon Doe", 23);
console.log(p3);
console.log(p3.getNome());
p3.idade = 30;
console.log(p3.idade);
class Produto {
    constructor(_nome, _preco) {
        this._nome = _nome;
        this._preco = _preco;
    }
    get nome() {
        return this._nome;
    }
    get preco() {
        return this._preco;
    }
    set preco(p) {
        this._preco = p;
    }
    toString() {
        return `[nome=${this._nome}, nome=${this._preco}]`;
    }
}
class ProdutoPerecivel extends Produto {
    constructor(nome, preco, _dataValidade) {
        super(nome, preco);
        this._dataValidade = _dataValidade;
    }
    get dataValidade() {
        return this._dataValidade.toLocaleDateString();
    }
    toString() {
        return super.toString() + `[dataValidade=${this._dataValidade.toLocaleDateString()}]`;
    }
}
let prod1 = new Produto("prod1", 1.99);
console.log(prod1);
let prod2 = new ProdutoPerecivel("prod2", 1.99, new Date(2019, 11, 20));
console.log(prod2);
console.log(prod2.toString());
//# sourceMappingURL=index.js.map