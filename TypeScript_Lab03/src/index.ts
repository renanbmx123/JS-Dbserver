/*1. Crie uma classeque represente um Círculo.
Estaclasse deve possuir as propriedades
de um ponto central (coordenadas x, y) e um
tamanho de raio. Defina métodospara o
cálculo da área do círculoe do comprimento
da circunferência. Escreva um bloco de
código para testar a implementação do círculo.*/

// class circulo{
//   constructor(private x:number,private y:number,private r:number){}
//   get raio():number{
//       return this.r;
//   }
//   get coord_x():number{
//       return this.x;
//   }
//   get coord_y():number{
//       return this.y;
//   }
//   set raio(n:number){
//       if(n > 0){
//       this.r = n;
//     }else {
//       console.log("O valor do raio deve ser maior que zero.");
//     }
//   }
// }
//
// let bola = new circulo(4,4,10);
// console.log (bola.coord_x);

/*2
**
.*/

class Moeda{
  constructor(private _valor:number, private _nome: string){}

  get valor():number{
    return this._valor;
  }

  get nome():string{
    return this._nome;
  }

}

class Cofrinho{
  private moedas:Moeda[] = [];
  adicionar(umaMoeda:Moeda):void{
    this.moedas.push(umaMoeda);
  }
  calcularTotal():number{
    const somador:(x:number,y:Moeda) => number =
                  (soma, moeda) => soma + moeda.valor;
    return this.moedas.reduce(somador,0);
  }

}

let cofre:Cofrinho = new Cofrinho();
cofre.adicionar(new Moeda(1.0,'1 real'));
cofre.adicionar(new Moeda(0.50,'50 centavos'));
cofre.adicionar(new Moeda(0.10,'10 centavos'));
console.log(cofre.calcularTotal());
let cofre2 = new Cofrinho();
console.log(cofre2.calcularTotal());


/*2
**
.*/
