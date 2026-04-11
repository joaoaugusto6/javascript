/*
João Augusto de Souza tem 13 anos, pesa 46 kg
tem 1.6 de altura e seu IMC é de 17.97
João Augusto nasceu em 2012
*/

const nome = 'João Augusto';
const sobrenome = 'de Souza';
const idade = 13;
const peso = 46;
const alturaEmM = 1.60;

let imc;
imc = peso / (alturaEmM * alturaEmM);

let ano = 2012;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e o seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${ano}`);