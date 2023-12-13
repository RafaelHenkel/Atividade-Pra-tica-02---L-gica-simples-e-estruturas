// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

let primeiroNumero = parseFloat(prompt("Primeiro numero"));
let segundoNumero = parseFloat(prompt("Segundo numero"));
let operacaoMatematica = prompt(
  "Digite a operaçao matématica: soma|subtracao|multiplicacao|divisao"
);
let calculo;

switch (operacaoMatematica) {
  case "soma":
    calculo = primeiroNumero + segundoNumero;
    document.write(
      `A soma de ${primeiroNumero} e ${segundoNumero} é -> ${calculo}`
    );
    break;
  case "subtracao":
    calculo = primeiroNumero - segundoNumero;
    document.write(
      `A subtracao de ${primeiroNumero} e ${segundoNumero} é -> ${calculo}`
    );
    break;
  case "multiplicacao":
    calculo = primeiroNumero * segundoNumero;
    document.write(
      `A multiplicacao de ${primeiroNumero} e ${segundoNumero} é -> ${calculo}`
    );
    break;
  case "divisao":
    calculo = primeiroNumero / segundoNumero;
    document.write(
      `A  de ${primeiroNumero} e ${segundoNumero} é -> ${calculo}`
    );
    break;
  default:
    document.write("Operacao matematica inexistente");
}
