alert("Iremos somar 2 números")
let firstNumber = prompt("Digite o primeiro número :")
let secondNumber = prompt("Digite o segundo número :")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restdiv = firstNumber % secondNumber


alert('soma' + sum)
alert('subtração' + sub)
alert('Multiplicação' + mult)
alert('Divisão' + div)
alert('Resto da divisão' + restdiv)

// Verifique se a soma dos dois números é par (ou ímpar);

if (sum % 2 == 0) {
  alert('O número é Par')
} else {
  alert('O número é Impar')
}
// Verifique se os dois números inseridos são iguais (ou diferentes);

if ( firstNumber != secondNumber) {
  alert('Os números são diferentes')
} else {
  alert('Os números são iguais')
}