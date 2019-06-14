import {Document,Schema,model, Model,connect} from 'mongoose';

interface Pessoa{
  nome: string,
  idade: number
}

interface PessoaDocument extends Pessoa, Document{}

const PessoaSchema = new Schema({
  nome:{type:String, required:true,minlength:1, maxlength:50},
  idade:{type:Number, required:true,min:0}
});

const pessoaModel: Model<PessoaDocument> = model('Pessoa', PessoaSchema, 'pessoas');

async function Main(){
  try{
    const url = 'mongodb://localhost:27017/mongoose';
    const cliente = await connect(url, {useNewUrlParser:true});
    console.log('Conectado com sucesso');
    /*
    const documento = await pessoaModel.create({nome:'Novo',idade:10});
    await documento.save();
    let res = await documento.save();
    console.log(res);
    documento.idade = 45;
    res = await documento.save();
    console.log(res);
*/
  const consulta = pessoaModel.find();
  const resultado = await consulta.exec();;
  resultado.forEach(p => console.log(p.nome));

  cliente.disconnect();
  }catch(error){
      console.log('Erro:');
      console.log(error);
  }
}

Main();
