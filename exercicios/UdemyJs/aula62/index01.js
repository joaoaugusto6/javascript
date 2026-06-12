// Valor por Referência
//                         0       1       2 
const nomes = new Array('João', 'José', 'Luca');
const novo = [...nomes] // Atribuição por valor, ou seja, cria um novo array com os mesmos elementos
// const novo = nomes // Atribuição por referência, ou seja, ambos apontam para o mesmo array
novo.pop() // Remove o último elemento do array

console.log(nomes);
console.log(novo);
