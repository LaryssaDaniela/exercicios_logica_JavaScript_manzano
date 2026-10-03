//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.
somaPares = 0;
numero = 1;

while (numero <= 500) {
    if (numero % 2 === 0) {
        somaPares = somaPares + numero;
    }
    numero = numero + 1;
}

console.log("Somatório dos valores pares de 1 a 500:", somaPares);