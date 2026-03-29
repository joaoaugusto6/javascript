function criaPessoa(nome, sobrenome, idade /*Parametro = receber o valor passado pelo Arguemento*/) {
    return {
        /*nome: nome,
        sobrenome: sobrenome,
        idade: idade
        */
       nome,
       sobrenome,
       idade
    }
}

const pessoa1 = criaPessoa('João', 'Augusto de Souza', 13 /*Argumento = valor passado para o Parametro */)
console.log(pessoa1)