const nome = 'João';

let i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

console.log('----------');

while (i < 5) {
    console.log(i);
    i++;
}

// CUIDADO: cuidado para não criar um loop infinito, ou seja, um loop que nunca termina, isso pode travar o navegador ou o terminal.

// while (true) {
//     console.log('Isso é um loop infinito');
// }