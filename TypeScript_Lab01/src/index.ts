/*
1. Escreva um trecho de código para imprimir os números pares definidos por um intervalode valores
 inteiros não-negativos inicioe fim.Utilize versões com fore while.


let inicioIntervalo:number = 0;
let fimIntervalo:number = 100;

for (let count = 0; count < fimIntervalo;count ++){
  if ((count%2) === 0){
    console.log(count + " é par")
  }else
  {
    console.log(count + " não é par")
  }
}*/

/*
 2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o
 resultado?let i: number= 0;while (i != 10) {i += 0.2;}

let i: number= 0;
while (i != 10) {
  i += 0.1;
}*/  // A representacao e finita, e o java considera number como um valor float.
/*

/*3. Escreva uma função min(x,y)que devolve
o menor entre dois números.Não use funções auxiliares de Math.Utilize corretamente a declaração de tipos nos
parâmetros e no resultado da função.

function min(n1:number, n2:number): number{
    if(n1 < n2)
    {
       return n1;
    }else if(n1 > n2)
    {
      return n2;
    }
    return n1;
}
console.log (min(1.0002,1.0002));
*/
/*
 4. Escreva uma função pow(x,y)que calcula o valor de 𝑥𝑦, ou seja, x elevado a potência y.
 Assuma que os valores de x e y são números inteiros não negativos e que 𝑥0=1 para qualquer valor
 de x.Apresente uma versão iterativa e uma versão recursiva para a função.Não utilize o operador **.
 Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.
*/

function  potencia  (base:number, potencia:number):number {
  let result:number = 1;
  while(potencia >0){
    result *= base;
    potencia--;
  }
  return result;
}


function  potencia2(base:number, potencia:number):number {
    let result:number = 1;
    if(potencia > 0)
    {
      potencia --;
      console.log(result);
      return result *= potencia2(base,potencia);
    }
    else{
      return base;
    }
}

console.log (potencia2(2,3));

//console.log(potencia(3,3));


/*
 5. Escreva uma função toMaiusculaPrimeira(s)que recebe uma string s(assuma qualquer string não vazia) e
 retorna a mesma string com a primeira letra em maiúscula.Utilize corretamente a declaração de tipos
 nos parâmetros e no resultado da função.
*/
/*
 6. Escreva uma função getMax(arr)que recebe um array de número inteiros e retorna o maior elemento encontrado
 no array. Assuma que o array não está vazio.Não utilize funções auxiliares de outros objetos disponibilizados
 pelo TypeScript.Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.
*/
/*
 7. Escreva uma função que, utilizando objetos Map, calcule a frequência de cadanúmeropresenteem um
determinado array contendo números inteiros.Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função*/
