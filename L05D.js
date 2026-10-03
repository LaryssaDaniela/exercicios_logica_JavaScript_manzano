//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.
somaPares = 0;

for (numero = 1; numero <= 500; numero = numero + 1) {
    if (numero % 2 === 0) {
        somaPares = somaPares + numero;
    }
}

console.log("Somatório dos valores pares de 1 a 500:", somaPares);