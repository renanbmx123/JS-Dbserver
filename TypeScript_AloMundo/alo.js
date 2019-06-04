var umaPessoa;
umaPessoa = 'John Doe';
var outraPessoa = 'Mary Doe';
var hoje = new Date();
//document.body.innerHTML = `Aló, ${umaPessoa}`;
document.body.innerHTML = alo(outraPessoa);
function alo(nome) {
    return 'Aló, ' + nome;
}
