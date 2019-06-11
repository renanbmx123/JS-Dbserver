export class Moeda{
  constructor(private _valor:number, private _nome: string){}

  get valor():number{
    return this._valor;
  }

  get nome():string{
    return this._nome;
  }

}

export class Cofrinho{
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
