// return
// Retorna um valor
// Termina a função

/* 
function soma(a, b) {
    return a + b;
} */


/* document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
}); */


/* function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('João', 'Augusto');
const p2 = {
    nome: 'João',
    sobrenome: 'Augusto'
};

console.log(p1);
console.log(p2); */


/* function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto); */


/* function duplica(n) {
    return n * 2;
}
function triplica(n) {
    return n * 3;
}
function quadriplica(n) {
    return n * 4;
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2)); */

// forma mais simples de criar as funções acima

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));