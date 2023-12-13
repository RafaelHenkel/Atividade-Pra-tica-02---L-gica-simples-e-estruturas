// Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

let saldo = Number(prompt("Digite seu saldo"));

if (saldo > 0) {
  console.log(`Seu saldo é de ${saldo}`);
  let saque = Number(
    prompt("Digite a quantidade de dinheiro que deseja sacar")
  );
  if (saque % 5 == 0 && saque + 4.5 <= saldo) {
    saldo = saldo - 4.5 - saque;
    console.log(`Saque efetuado novo saldo: ${saldo}`);
  } else {
    console.log(
      "Saque negado, seu saque deve ser feito com um valor multiplo de 5 e será cobrado uma taxa de R$ 4.50"
    );
  }
} else {
  console.log("Saldo invalido, insira um valor acima de 0!");
}
