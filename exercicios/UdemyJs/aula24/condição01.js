/*
if e else
else if
else
*/

// if pode ser usado sozinho
// sempre que usarmos o else, o if é obrigatório antes
// Eu posso usar quantos else if eu quiser
// só posso ter um else na checagem
// podemos usar condições sem o else if, mas nunca sem o if e else

/*
Entre 0 e 11 - Bom dia!
Entre 12 e 17 - Boa tarde!
Entre 18 e 23 - Boa noite!
Qualquer outro horário - Olá!
*/

const hora = 11;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
}
else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
}
else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
}
else {
    console.log('Olá!');
}

console.log('----------------------------------');

const tenhoGrana = true; // false resultará em "Vou ficar em casa!"

if (tenhoGrana) {
    console.log('Vou sair de casa!');
}
else {
    console.log('Vou ficar em casa!');
}