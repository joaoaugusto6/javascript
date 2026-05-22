function funcao() {
    console.log('Olá, mundo!');
}

funcao();

console.log('------------------------------');

function funcao2() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

funcao2(1, 2, 3, 4, 5); // vai mostrar a soma de todos os argumentos para a função que no caso os numeros.

console.log('------------------------------');

function funcao3(nome) { // a função recebe um parâmetro chamado "nome" quando ela é chamada.
    console.log(`Olá, ${nome}!`);
}

funcao3('João'); // vai mostrar "Olá, João!"