const pessoa = {
    nome: 'João',
    sobrenome: 'Souza',
    idade: 13,
    endereço: {
        rua: 'Rua açaí',
        numero: 200
    }
};

// atribuição via desestruturação
const { nome, sobrenome } = pessoa;
const { endereço: { rua, numero } } = pessoa;
console.log(nome, sobrenome, rua, numero);