import {MongoClient, Db, Cursor} from 'mongodb';
async function Main() {
  const url = 'mongodb://localhost:27017/teste';
  try{
    const client: MongoClient = await MongoClient.connect(url, {useNewUrlParser:true});
    console.log("Conectado com sucesso.");
    const banco:Db = client.db('teste');
    /*
    // Inserir Documento
    const umaPessoa = {nome:'Teste', idade:22};
    const resultIns = await banco.collection('pessoas').insertOne(umaPessoa);
    console.log(`Inserido: ${resultIns.insertedId}`);
    */

    // Consultar documentos
    // const cursor:Cursor = banco.collection('pessoas').updateOne({nome:'Teste'},{set:{idade:11}});
    // console.log();

    // Remover documentos
    const resultRem = banco.collection('pessoas').deleteOne({nome:'Teste'});
    console.log()
    // while(await cursor.hasNext()){
    //   const documento = await cursor.next();
    //   console.log(documento.nome);
    // }
    //await cursor.forEach(doc => console.log(doc.nome));

    await client.close();
  }catch(erro){
    console.log("Erro de acesso ao BD:");
    console.log(erro);
  }
}

Main();
