const p1 = new Object();
p1.nome = "João";
p1.sobrenome = "Silva";
p1.idade = 30;
p1.falarNome = function() {
    console.log(`${this.nome} tem ${this.idade} anos.`);
};
p1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in p1) {
    console.log(p1[chave]);
};
