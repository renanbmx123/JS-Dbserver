"use strict";
class ValidationError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = 'ValidationError';
    }
}
function vaiDarErro() {
    throw new ValidationError('Dados invalidos');
}
try {
    vaiDarErro();
}
catch (erro) {
    console.log(erro.name);
    console.log(erro.message);
}
//# sourceMappingURL=index.js.map