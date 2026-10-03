//Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.
numero1 = parseInt(prompt("Digite o primeiro número:"));
numero2 = parseInt(prompt("Digite o segundo número:"));
numero3 = parseInt(prompt("Digite o terceiro número:"));
numero4 = parseInt(prompt("Digite o quarto número:"));

console.log("Números divisíveis por 2 e por 3:");

if (numero1 % 2 === 0 && numero1 % 3 === 0) {
    console.log(numero1);
}

if (numero2 % 2 === 0 && numero2 % 3 === 0) {
    console.log(numero2);
}

if (numero3 % 2 === 0 && numero3 % 3 === 0) {
    console.log(numero3);
}

if (numero4 % 2 === 0 && numero4 % 3 === 0) {
    console.log(numero4);
}