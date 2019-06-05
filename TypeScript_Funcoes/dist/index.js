"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function area(r) {
    return (Math.PI * potencia(2));
}
function circunferencia(r) {
    return (2 * Math.PI * r);
}
function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }
    return resultado;
}
function buildName(fristName, ...resOfName) {
    return fristName + " " + resOfName.join(" ");
}
console.log(area(4.5));
console.log(circunferencia(4.5));
console.log(potencia(100));
console.log(buildName('a', 'b', 'c', 'd', 'e'));
const somar = function (x, y) {
    return x + y;
};
console.log(somar(1, 0));
console.log(somar(1, 1.2));
const mult = (x, y) => x * y;
console.log(mult(1, Math.PI));
function multiplicar(fator) {
    return (numero => numero * fator);
}
console.log(multiplicar(3)(2));
//# sourceMappingURL=index.js.map