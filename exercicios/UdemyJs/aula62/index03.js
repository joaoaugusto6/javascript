// Valor por Referência
//                            0       1       2 
// const nomes = new Array('Luca', 'José', 'João');
// const novo = nomes.slice(0, -1) // Cria um novo array a partir do array original, sem o último elemento
// console.log(novo);

// const nome = 'João Augusto';
// const nomes =  nome.split(' ');
// console.log(nomes);

const nomes = [ 'João', 'Augusto' ];
const nome = nomes.join(' '); // Junta os elementos do array em uma string, usando um espaço como separador
console.log(nome);