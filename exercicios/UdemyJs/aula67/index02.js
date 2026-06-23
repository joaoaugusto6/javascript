// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'João', idade: 14},
    {nome: 'Maria', idade: 23},
    {nome: 'Pedro', idade: 55},
    {nome: 'Beatriz', idade: 47},
    {nome: 'Rhianna', idade: 72},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
