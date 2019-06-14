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
        const url = 'mongodb://localhost:27017/teste';
        try {
            const client = yield mongodb_1.MongoClient.connect(url, { useNewUrlParser: true });
            console.log("Conectado com sucesso.");
            const banco = client.db('teste');
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
            const resultRem = banco.collection('pessoas').deleteOne({ nome: 'Teste' });
            console.log();
            // while(await cursor.hasNext()){
            //   const documento = await cursor.next();
            //   console.log(documento.nome);
            // }
            //await cursor.forEach(doc => console.log(doc.nome));
            yield client.close();
        }
        catch (erro) {
            console.log("Erro de acesso ao BD:");
            console.log(erro);
        }
    });
}
Main();
//# sourceMappingURL=index.js.map