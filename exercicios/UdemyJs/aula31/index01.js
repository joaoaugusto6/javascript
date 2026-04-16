const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'João';
var nome2 = 'João';

var nome2 = 'Augusto'; // a variavel var foi redeclarada

if (verdadeira) {
    let nome = 'Pedro'; // criando
    var nome2 = 'Rogério'; // redeclarando a variavel var
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa'; // criando
        var nome2 = 'Ronaldinho'; // redeclarando a variavel var
        console.log(nome, nome2);
    }
}
console.log(nome, nome2);

console.log('------------------');

console.log(sobrenome); // undefined, pois a variável sobrenome foi declarada com var, mas ainda não foi atribuída um valor

var sobrenome = 'Souza'; // a variável sobrenome é declarada e atribuída um valor

console.log(sobrenome); // Souza, pois a variável sobrenome agora tem um valor atribuído