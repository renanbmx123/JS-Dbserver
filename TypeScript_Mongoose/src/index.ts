import {Mongoose, Schema, model} from 'mongoose';

async function Main() {
    try {
        const url = 'mongodb://localhost:27017/mongoose';
        const cliente = await connect(url, {useNewUrlParser:true});
        console.log('Conectado com sucesso');

        const pessoaEsquema = new Schema({
          nome:{type:String, required:true,minlength:1, maxlength:50},
          idade:{type:Number, required:true,min:0}
        });

        const pessoaModelo = model('Pessoa',pessoaEsquema,'pessoas');
        //Inserir documento
        /*
        const umaPessoa = {nome:'Teste', idade:22};
        const resultIns = await banco.collection('pessoas').insertOne(umaPessoa);
        console.log(`Inserido: ${resultIns.insertedId}`);
        const umaPessoa2 = {nome:'Renan', idade:18};
        const resultIns2 = await banco.collection('pessoas').insertOne(umaPessoa2);
        console.log(`Inserido: ${resultIns2.insertedId}`);
        const umaPessoa3 = {nome:'Outro', idade:32};
        const resultIns3 = await banco.collection('pessoas').insertOne(umaPessoa3);
        console.log(`Inserido: ${resultIns3.insertedId}`);
        */


        //Consultar documentos

        const consulta = pessoaModelo.find()
        const resultado = await consulta.exec();
        console.log(resultado);
        /*
        const cursor: Cursor = banco.collection('pessoas').find({idade:{$gt:10}});

        while(await cursor.hasNext()) {
            const documento = await cursor.next();
            console.log(documento.nome);
        }
        */
       await cursor.forEach(doc => console.log(doc.nome));

       //Alterar documento
       /*
        const resulAlt = await banco.collection('pessoas').updateOne({nome:'Teste'},{$set:{idade:50}});
        console.log(`Alteração: ${resulAlt.modifiedCount}`);
        */

        //Remover documento
        //const resulRem = await banco.collection('pessoas').deleteOne({nome:'Teste'});
        //console.log(`Remoção: ${resulRem.deletedCount}`);

        await cliente.close();
    } catch (erro) {
        console.log('Erro de acesso ao BD:');
        console.log(erro);
    }
}

Main();
