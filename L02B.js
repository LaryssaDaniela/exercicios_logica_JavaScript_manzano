//Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.
numero = parseInt(prompt("Digite um número inteiro positivo ou negativo:"));

if (numero < 0) {
    numeroPositivo = numero * -1;
} else {
    numeroPositivo = numero;
}

console.log("O valor absoluto do número é:", numeroPositivo);