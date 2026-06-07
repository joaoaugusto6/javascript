// function* geradora1
function* geradora1() {
    // Código qualquer...
    yield 'valor 1';
    // Código qualquer...
    yield 'valor 2';
    // Código qualquer...
    yield 'valor 3';
}

const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}

// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value); // undefined, pois não tem mais nada para retornar.
