//Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.
numero1 = parseInt(prompt("Digite o primeiro número:"));
numero2 = parseInt(prompt("Digite o segundo número:"));
numero3 = parseInt(prompt("Digite o terceiro número:"));
numero4 = parseInt(prompt("Digite o quarto número:"));
numero5 = parseInt(prompt("Digite o quinto número:"));

maior = numero1;
menor = numero1;

if (numero2 > maior) { maior = numero2; }
if (numero2 < menor) { menor = numero2; }

if (numero3 > maior) { maior = numero3; }
if (numero3 < menor) { menor = numero3; }

if (numero4 > maior) { maior = numero4; }
if (numero4 < menor) { menor = numero4; }

if (numero5 > maior) { maior = numero5; }
if (numero5 < menor) { menor = numero5; }

console.log("O maior valor é:", maior);
console.log("O menor valor é:", menor);