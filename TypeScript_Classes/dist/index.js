"use strict";
// // class Pessoa{
// //     nome:string;
// //     idade:number;
// //     constructor(n:string,i:number){
// //         this.idade = i;
// //         this.nome = n;
// //     }
// // }
function filtrar(array, filtro) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (filtro(array[i])) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}
console.log(filtrar([0, 10, 1, 3, 2], i => i % 2 === 0));
//# sourceMappingURL=index.js.map