const data = new Date("1987-04-21 00:00:00");
let diaSemana = data.getDay();
let diaSemanaTexto;

// O break é necessário para evitar que o código continue executando os próximos cases, mesmo que eles não sejam correspondentes ao valor de diaSemana.

switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Segunda-feira";
    break;
  case 2:
    diaSemanaTexto = "Terça-feira";
    break;
  case 3:
    diaSemanaTexto = "Quarta-feira";
    break;
  case 4:
    diaSemanaTexto = "Quinta-feira";
    break;
  case 5:
    diaSemanaTexto = "Sexta-feira";
    break;
  case 6:
    diaSemanaTexto = "Sábado";
    break;
  default:
    diaSemanaTexto = "";
}

/*
if (diaSemana === 0) {
    diaSemanaTexto = "Domingo";
} else if (diaSemana === 1) {
    diaSemanaTexto = "Segunda-feira";
} else if (diaSemana === 2) {
    diaSemanaTexto = "Terça-feira";
} else if (diaSemana === 3) {
    diaSemanaTexto = "Quarta-feira";
} else if (diaSemana === 4) {
    diaSemanaTexto = "Quinta-feira";
} else if (diaSemana === 5) {
    diaSemanaTexto = "Sexta-feira";
} else if (diaSemana === 6) {
    diaSemanaTexto = "Sábado";
} else {
    diaSemanaTexto = "";
}
*/

console.log(diaSemana, diaSemanaTexto);
