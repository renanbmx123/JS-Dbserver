"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AutorSchema = new mongoose_1.Schema({
    primeiro_nome: { type: String, required: true, max: 100 },
    ultimo_nome: { type: String, required: true, max: 100 }
});
exports.AutorModel = mongoose_1.model('Autor', AutorSchema, 'autores');
//# sourceMappingURL=autorModel.js.map