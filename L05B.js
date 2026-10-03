//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.
numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

for (contador = 1; contador <= 10; contador = contador + 1) {
    resultado = numero * contador;
    console.log(numero + " x " + contador + " = " + resultado);
}