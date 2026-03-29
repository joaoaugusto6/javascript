let pessoa1 = {
    nome: 'João',
    sobrenome: 'Augusto de Souza',
    idade: 13,

    fala() {
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`)
    },

    incrementaIdade() {
        this.idade++
    }
};

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()