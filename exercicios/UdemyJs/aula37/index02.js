const pessoa = {
    nome: 'João',
    sobrenome: 'Augusto',
    idade: 14
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}