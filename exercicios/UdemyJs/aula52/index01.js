const nome = 'João';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Maria';
    falaNome();
}
usaFalaNome(); // Maria
