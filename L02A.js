//Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.
numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

if (numero1 > numero2) {
    diferenca = numero1 - numero2;
}

else {
    diferenca = numero2 - numero1;
}

console.log("A diferença do maior pelo menor é:", diferenca);