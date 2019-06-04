let umaPessoa: string;
umaPessoa = 'John Doe';
let outraPessoa = 'Mary Doe';
let hoje = new Date();
//document.body.innerHTML = `Aló, ${umaPessoa}`;
document.body.innerHTML = alo(outraPessoa);     
           
function alo(nome: string):string{
    return 'Aló, '+ nome;
}