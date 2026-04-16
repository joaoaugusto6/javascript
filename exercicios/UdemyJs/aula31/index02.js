const verdadeira = true;
var falar2 = 'tchau'; // Variável global, pode ser acessada de qualquer lugar do código

function falaOi() {
    var falar = 'Oi'; // Variável local, só existe dentro da função
    console.log(falar);
    console.log(falar2); // acessando a variável global dentro da função

    if (verdadeira) {
        let nome = 'João'; // Variável local do bloco if. E se let = nome for colocada executada fora do bloco if, ela não existirá, pois let tem escopo de bloco entao isso gerará um erro.
        console.log(nome); // João
    }   
}

falaOi();

console.log('------------------');

console.log(falar2); // tchau, pois falar2 é uma variável global e pode ser acessada de qualquer lugar do código

// console.log(falar); // Erro: falar is not defined, pois falar é uma variável local da função falaOi