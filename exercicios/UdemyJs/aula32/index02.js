//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...resto] = numeros; // ... = rest operator mas pode ser ... = spread operator

console.log(resto); // mostra o resto do array q nn tá sendo estruturado no array.
console.log(um, dois, tres); // mostra os tres primeiros elementos do array q nn estão no resto.