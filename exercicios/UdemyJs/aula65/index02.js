// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'João', idade: 14},
    {nome: 'Maria', idade: 23},
    {nome: 'Pedro', idade: 55},
    {nome: 'Beatriz', idade: 47},
    {nome: 'Rhianna', idade: 32},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisIdade = pessoas.filter(e => e.idade >= 50);
const nomeQueTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisIdade);
console.log(nomeQueTerminaComA);
