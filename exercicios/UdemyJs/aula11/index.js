/*
let varD = 'A'
let varE = 'B'
let varF = 'C'

let varA = varE
let varB = varF
let varC = varD

console.log(varA, varB, varC)
*/

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)