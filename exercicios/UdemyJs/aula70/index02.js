// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Congela o objeto, não permitindo alterações
}

// {} <- this -> this
const p1 = new Pessoa('João', 'Augusto');

p1.nome = 'outra coisa';
p1.sobrenome = 'QLQ';

// p1.fala = function() {console.log('Oi, tudo bem?');}; // Não é possível adicionar métodos ou propriedades após o Object.freeze
// p1.fala();

// delete p1.nome;

const p2 = new Pessoa('Luca', 'Eduardo');
const p3 = new Pessoa('Luna', 'Eduarda');

console.log(p1);
console.log(p2);
console.log(p3);
