// Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.

let diasSemana = Number(prompt("Digite de 1 - 7"));

switch (diasSemana) {
  case 1:
    document.write("DOMINGO");
    break;
  case 2:
    document.write("SEGUNDA-FEIRA");
    break;
  case 3:
    document.write("TERÇA-FEIRA");
    break;
  case 4:
    document.write("QUARTA-FEIRA");
    break;
  case 5:
    document.write("QUINTA-FEIRA");
    break;
  case 6:
    document.write("SEXTA-FEIRA");
    break;
  case 7:
    document.write("SABADO");
    break;
  default:
    document.write("Este Dia não existe");
}
