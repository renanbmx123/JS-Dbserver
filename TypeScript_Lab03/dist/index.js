"use strict";
/*1. Crie uma classeque represente um Círculo.
Estaclasse deve possuir as propriedades
de um ponto central (coordenadas x, y) e um
tamanho de raio. Defina métodospara o
cálculo da área do círculoe do comprimento
da circunferência. Escreva um bloco de
código para testar a implementação do círculo.*/
class circulo {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    get raio() {
        return this.r;
    }
    get coord_x() {
        return this.x;
    }
    get coord_y() {
        return this.y;
    }
    set raio(n) {
        if (n > 0) {
            this.r = n;
        }
        else {
            console.log("O valor do raio deve ser maior que zero.");
        }
    }
}
let bola = new circulo(4, 4, 10);
console.log(bola.coord_x);
/*2
**
.*/
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
let cofre = new Cofrinho();
cofre.adicionar(new Moeda(1.0, '1 real'));
cofre.adicionar(new Moeda(0.50, '50 centavos'));
cofre.adicionar(new Moeda(0.10, '10 centavos'));
console.log(cofre.calcularTotal());
let cofre2 = new Cofrinho();
console.log(cofre2.calcularTotal());
//# sourceMappingURL=index.js.map