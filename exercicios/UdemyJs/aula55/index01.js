// IIFE -> Immediately Invoked Function Expression

/* function qualquerCoisa() {
    console.log('123456');
};
qualquerCoisa(); */

/* (function() {
    const nome = 'João';
    console.log(nome);
})();

const nome = 'João';
console.log(nome); */

/* (function() {
    const sobrenome = 'Souza';
    function criarNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falarNome() {
        console.log(criarNome('João'));
    }

    falarNome();
})(); */

(function(idade, peso, altura) {
    const sobrenome = 'Souza';
    function criarNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falarNome() {
        console.log(criarNome('João'));
    }

    falarNome();
    console.log(idade, peso, altura);
})(14, 45, 1.68);