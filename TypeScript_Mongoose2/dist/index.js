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
const mongoose_1 = require("mongoose");
const PessoaSchema = new mongoose_1.Schema({
    nome: { type: String, required: true, minlength: 1, maxlength: 50 },
    idade: { type: Number, required: true, min: 0 }
});
const pessoaModel = mongoose_1.model('Pessoa', PessoaSchema, 'pessoas');
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = 'mongodb://localhost:27017/mongoose';
            const cliente = yield mongoose_1.connect(url, { useNewUrlParser: true });
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
            const resultado = yield consulta.exec();
            ;
            resultado.forEach(p => console.log(p.nome));
            cliente.disconnect();
        }
        catch (error) {
            console.log('Erro:');
            console.log(error);
        }
    });
}
Main();
//# sourceMappingURL=index.js.map