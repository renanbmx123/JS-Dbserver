import { setFlagsFromString } from "v8";

function area(r: number): number{
    return (Math.PI*potencia(2));
}

function circunferencia(r: number){
    return (2 * Math.PI * r);
}
function potencia(base: number, expoente:number = 2): number{
    let resultado = 1;
    for(let cont = 0; cont < expoente; cont++){
        resultado *=base;
    }
    return resultado;
}
function buildName(fristName:string, ...resOfName: string[]){
    return fristName+" "+resOfName.join(" ");
}
console.log(area(4.5));
console.log(circunferencia(4.5));
console.log(potencia(100));
console.log(buildName('a','b','c','d','e'));

const somar = function(x:number, y:number): number {
    return x+y;
}
console.log(somar(1,0));
console.log(somar(1,1.2));

const mult = (x:number, y:number) => x*y;
console.log(mult(1,Math.PI));

function multiplicar(fator:number): (n:number) => number{
    return (numero => numero * fator);
}

console.log(multiplicar(3)(2));

let palavras:string[] = ['a','b'];
console.log(palavras.pop());
console.log(palavras.pop());
console.log(palavras.pop());