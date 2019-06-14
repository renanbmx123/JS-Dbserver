"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'mongodb://localhost:27017/mongoose';
        try {
            const cliente = yield mongodb_1.MongoClient.connect(url, { useNewUrlParser: true });
            console.log('Conectado com sucesso');
            const banco = cliente.db('teste');
            //Inserir documento
            const umaPessoa = { nome: 'Teste', idade: 22 };
            const resultIns = yield banco.collection('pessoas').insertOne(umaPessoa);
            console.log(`Inserido: ${resultIns.insertedId}`);
            const umaPessoa2 = { nome: 'Renan', idade: 18 };
            const resultIns2 = yield banco.collection('pessoas').insertOne(umaPessoa2);
            console.log(`Inserido: ${resultIns2.insertedId}`);
            const umaPessoa3 = { nome: 'Outro', idade: 32 };
            const resultIns3 = yield banco.collection('pessoas').insertOne(umaPessoa3);
            console.log(`Inserido: ${resultIns3.insertedId}`);
            //Consultar documentos
            const cursor = banco.collection('pessoas').find({ idade: { $gt: 10 } });
            while (yield cursor.hasNext()) {
                const documento = yield cursor.next();
                console.log(documento.nome);
            }
            yield cursor.forEach(doc => console.log(doc.nome));
            //Alterar documento
            /*
             const resulAlt = await banco.collection('pessoas').updateOne({nome:'Teste'},{$set:{idade:50}});
             console.log(`Alteração: ${resulAlt.modifiedCount}`);
             */
            //Remover documento
            //const resulRem = await banco.collection('pessoas').deleteOne({nome:'Teste'});
            //console.log(`Remoção: ${resulRem.deletedCount}`);
            yield cliente.close();
        }
        catch (erro) {
            console.log('Erro de acesso ao BD:');
            console.log(erro);
        }
    });
}
Main();
//# sourceMappingURL=index.js.map