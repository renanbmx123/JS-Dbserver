import {Cofrinho, Moeda} from "./entidades";
import {lerCofreAsyncAwait,lerCofreAsync} from "./persistencia";

async function  main() {
  const cofre = new Cofrinho();
  /*cofre.adicionar(new Moeda(1,'1 real'));
  cofre.adicionar(new Moeda(1,'1 real'));
  cofre.adicionar(new Moeda(0.50,'50 centavos'));
  try{
    salvarCofre(cofre,'meuCofrinho.json');
  }catch (erro){
    console.log("Nao foi possivel gravar no arquivo");
    console.log(erro);
  }*/
  /*
  lerCofre('meuCofrinho.json', (erro,cofre) => {
    if (erro){
      console.log('Erro de leitura do arquivo:');
      console.log(erro);
    }else{
      console.log(cofre!.calcularTotal());
    }
  })*/
  // lerCofreAsync('meuCofrinho.json')
  // .then(cofre => console.log(cofre.calcularTotal()))
  // .catch(erro => {
  //   console.log('Erro de leitura do arquivo:');
  //   console.log(erro);
  // });
  try{
    const cofre = await lerCofreAsyncAwait('meuCofrinho.json');
    console.log(cofre.calcularTotal());
  }catch(erro){
    console.log('Erro de leitura do arquivo:');
    console.log(erro);
  }
}

main();
