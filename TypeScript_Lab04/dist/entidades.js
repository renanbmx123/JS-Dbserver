"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Moeda {
    constructor(_valor, _nome) {
        this._valor = _valor;
        this._nome = _nome;
    }
    get valor() {
        return this._valor;
    }
    get nome() {
        return this._nome;
    }
}
exports.Moeda = Moeda;
class Cofrinho {
    constructor() {
        this.moedas = [];
    }
    adicionar(umaMoeda) {
        this.moedas.push(umaMoeda);
    }
    calcularTotal() {
        const somador = (soma, moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }
}
exports.Cofrinho = Cofrinho;
//# sourceMappingURL=entidades.js.map