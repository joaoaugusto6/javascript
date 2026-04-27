const pessoa = {
    nome: 'João',
    idade: 14,
    cidade: 'Belo Horizonte'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}