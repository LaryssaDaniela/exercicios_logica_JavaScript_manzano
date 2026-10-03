//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.
numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
contador = 1;

while (contador <= 10) {
    resultado = numero * contador;
    console.log(numero + " x " + contador + " = " + resultado);
    contador = contador + 1;
}