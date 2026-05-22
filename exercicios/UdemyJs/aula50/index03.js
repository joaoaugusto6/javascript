function funcao(nome, sobrenome, idade) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'João', sobrenome: 'Augusto', idade: 14};
funcao(obj);

console.log('------------------------------');

function funcao2({valor1, valor2, valor3}) {
    console.log(valor1, valor2, valor3);
}

funcao2({valor1: 'João', valor2: 'Augusto', valor3: 14}); 