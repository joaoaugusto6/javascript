try {
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou um erro");
  console.log("Fechei o arquivo");

  try {
    console.log(b);
  } catch (e) {
    console.log("deu erro");
  } finally {
    console.log('também sou final');
  }

} catch (error) {
  console.log("Tratando o erro");
} finally {
  console.log("FINALLY: Eu sempre sou executado");
}
