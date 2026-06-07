// function* geradora5
function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5() {
    yield function () {
        console.log('Vim do yield 1');
    };

    // ...

    // return function() {
    //     console.log('Vim do return');
    // }; // Se esse return for executado o generator é finalizado, e tudo q vier dps não será executado.
    yield function () {
        console.log('Vim do yield 2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();