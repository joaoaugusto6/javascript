//               0       1        2  
const alunos = ['Luiz', 'Maria', 'João']

alunos.push('Augusto')//Coloca um elemento no final
alunos.unshift('Fernanda')//Coloca um elemento no começo

console.log(alunos)

let apagado1 = alunos.shift()//apagado1 = 'Luiz' remove do começo
let apagado2 = alunos.pop() //apagado2 = 'Augusto' remove do final
delete alunos[2]// apaga alunos[2]
console.log(alunos)