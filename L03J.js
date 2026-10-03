//Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.
somaPares = 0;
quantidadePares = 0;
numero = 50;

while (numero <= 70) {
    if (numero % 2 === 0) {
        somaPares = somaPares + numero;
        quantidadePares = quantidadePares + 1;
    }
    numero = numero + 1;
}

mediaPares = somaPares / quantidadePares;

console.log("Soma dos valores pares (50 a 70):", somaPares);
console.log("Média dos valores pares:", mediaPares);