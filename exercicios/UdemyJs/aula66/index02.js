// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'João', idade: 14},
    {nome: 'Maria', idade: 23},
    {nome: 'Pedro', idade: 55},
    {nome: 'Beatriz', idade: 47},
    {nome: 'Rhianna', idade: 32},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

console.log(comIds);
