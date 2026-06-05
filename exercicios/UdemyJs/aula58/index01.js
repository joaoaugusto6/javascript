// Função Construtora -> objetos
// Função Fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = e => {};


    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ' ' + this.sobrenome + ': sou um método');
    }
}

const p1 = new Pessoa('John', 'August');
const p2 = new Pessoa('João', 'Augusto');

p1.metodo();
p2.metodo();