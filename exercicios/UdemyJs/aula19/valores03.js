/*
    Primitivos (imutáveis)- string, number, boolean, undefined, null (bigint, symbol)

    Referência (mutável) - array, object, function
*/

const a = {
    nome: 'João',
    sobrenome: 'Augusto'
};
const b = a; // Atribuição por referência

b.nome = 'Carlos';
console.log(a); // { nome: 'Carlos', sobrenome: 'Augusto' }
console.log(b); // { nome: 'Carlos', sobrenome: 'Augusto' }