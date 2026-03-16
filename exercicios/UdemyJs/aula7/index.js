/*
João Augusto de Souza tem 13 anos, pesa 46 kg
tem 1.6 de altura e seu IMC é de 25.925925925924
João Augusto nasceu em 2012
*/

const nome = 'João Augusto';
const sobrenome = 'de Souza';
const idade = 13;
const peso = 46;
const alturaEmM = 1.60;
let  imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
console.log(imc);