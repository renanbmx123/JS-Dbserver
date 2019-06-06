//Exercicio 6

function getMax(array:number){
}

//Exercicio 7
function frequencia(array: number[]):Map<number,number>{
    let contagem = new Map<number,number>();
    for (let valor of array){
        if(contagem.has(valor)){
            //contagem.set(valor,contagem.get(valor)+1); // pode retornar undefined. 
            //contagem.set(valor,(contagem.get(valor)||0)+1); // Operador shor circuit ||
            contagem.set(valor,contagem.get(valor)!+1); // ! remove null e undefined.
        }else{
            contagem.set(valor,1);
        }
        
    }
    return contagem;
}
console.log(frequencia([1,2,1,0,4,2]));
console.log(frequencia([]));

function frequenciaV2(array: number[]): Map<number,number>{
    return array.reduce((contagem,valor) => contagem.set(valor,(contagem.get(valor)||0)+1), new Map<number,number>())
}
console.log(frequenciaV2([1,2,1,0,4,2]));
